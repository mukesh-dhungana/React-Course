import { firebaseFile, timeStamp } from "./config"

export const getFileUrl = (e, setData, index) => {

    const list = Object.entries(e.target.files).map(([key, value]) => [key + Math.random(), value])


    list.forEach(x => {
        if (x[1]) {
            const uniqueName = Math.random() + x[1].name + Math.random()
            const storageRef = firebaseFile.ref(uniqueName)
            storageRef.put(x[1]).on("state_changed", snap => {

            }, error => {

            }, async () => {
                const url = await storageRef.getDownloadURL()
                setData(th => ({
                    ...th,
                    shops: th.shops.map((y, i) => i === index ?
                        { ...y, images: [...y.images, { id: uniqueName, url, image_name: x[1].name, timeStamp: timeStamp.now() }] } : y)
                }))
            })
        }
    })
}

export const deleteFile = (id) => {
    const storageRef = firebaseFile.ref(id)
    storageRef.delete().then(() => {
        console.log("File Deleted Successfully");
    }).catch(err => {
        console.log("Error Deleting File");
    })

}