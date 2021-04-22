import { firebaseFile, timeStamp } from "./config"

export const getFileUrl = async (e, setData, index) => {

    const list = Object.entries(e.target.files).map(([key, value]) => [key + Math.random(), value])

    // const random1 = Math.random()
    // const random2 = Math.random()

    // await Promise.all(
    //     list.map(x => {
    //         const uniqueName = random1 + x[1].name + random2
    //         const storageRef = firebaseFile.ref(uniqueName)
    //         return storageRef.put(x[1])
    //     })
    // );

    // const url = await Promise.all(
    //     list.map((x) => {
    //         const uniqueName = random1 + x[1].name + random2
    //         return firebaseFile.ref(uniqueName).getDownloadURL()

    //     })
    // )
    // console.log(url)
    // const newDta = list.map((x, i) => {
    //     const uniqueName = random1 + x[1].name + random2

    //     return { image_name: x[1].name, url: url[i], id: uniqueName }
    // })
    // return newDta

    // const urls = list.map(async (x) => {
    //     const uniqueName = random1 + x[1].name + random2
    //     await firebaseFile.ref(uniqueName).put(x[1])
    //     const url = await firebaseFile.ref(uniqueName).getDownloadURL()
    //     return { url, image_name: x[1], id: uniqueName }
    // })

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