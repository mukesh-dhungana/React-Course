import React, { useEffect, useState } from 'react'
import { projectFireStore, projectStorage, timestamp } from '../firebase/config'

const useStorage = (file) => {

    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(()=> {
        //References
        const storageRef = projectStorage.ref(file.name)
        const collectionRef  = projectFireStore.collection('images');
        storageRef.put(file).on('state_changed', (snap)=> {
            let percentage = (snap.bytesTransferred/ snap.totalBytes) *100 ;
            // console.log(snap.bytesTransferred, snap.totalBytes);
            setProgress(percentage)
        }, (err)=> {
            setError(err)
        }, async ()=> {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp()
            collectionRef.add({
                url: url,
                createdAt
            })
            setUrl(url)
        })
    },[file])

    return { progress, url, error }
}

export default useStorage;

