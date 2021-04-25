import { firebaseFile } from "./config"

export const getFileUrl = async (e) => {
   
    const list = Object.entries(e.target.files).map(([key, value]) => [key + Math.random(), value])

    const urls = await Promise.all(list.map(async (x) => {
        const random2 = Math.random()
        const uniqueName = x[0] + x[1].name + random2
        await firebaseFile.ref(uniqueName).put(x[1])
        const url = await firebaseFile.ref(uniqueName).getDownloadURL()
        return { url, image_name: x[1].name, id: uniqueName }
    }))

    return urls

    // list.forEach(async (x) => {
    //     if (x[1]) {
    //         const uniqueName = Math.random() + x[1].name + Math.random()
    //         await firebaseFile.ref(uniqueName).put(x[1])
    //         const url = await firebaseFile.ref(uniqueName).getDownloadURL()
    //         if (url) {
    //             setData(th => ({
    //                 ...th,
    //                 shops: th.shops.map((y, i) => i === index ?
    //                     { ...y, images: [...y.images, { id: uniqueName, url, image_name: x[1].name, timeStamp: timeStamp.now() }] } : y)
    //             }))
    //         }

    //     }
    // })
}

export const deleteFile = (id) => {
    const storageRef = firebaseFile.ref(id)
    storageRef.delete().then(() => {
        console.log("File Deleted Successfully");
    }).catch(err => {
        console.log("Error Deleting File");
    })

}