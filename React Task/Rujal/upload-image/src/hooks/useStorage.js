import { useState, useEffect } from 'react'
import { fireBaseStore } from '../firebase/config'

const useStorage = () => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)
    const [file, setUrlFile] = useState(null)

    useEffect(() => {
        if (file) {
            const storageRef = fireBaseStore.ref(file.name)

            storageRef.put(file).on('state_changed', snap => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
                setProgress(percentage)
            }, error => {
                setError(error)
            }, async () => {
                const u = await storageRef.getDownloadURL()
                setUrl(u)
            })
        }

    }, [file])

    return { progress, url, error, setUrlFile }
}

export default useStorage;