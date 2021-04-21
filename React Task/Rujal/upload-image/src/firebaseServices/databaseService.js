import { fireBaseDatabse, fireBaseStore } from '../firebase/config'

export const addData = (tableName, data, file = null) => {

    try {
        if (file) {
            const storageRef = fireBaseStore.ref(file.name)

            storageRef.put(file).on('state_changed', snap => {
                // let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
                // setProgress(percentage)
            }, error => {
                console.log(error);
            }, async () => {
                const u = await storageRef.getDownloadURL()
                data["url"] = u
                fireBaseDatabse.collection(tableName).add(data)
            })
        } else {
            data["url"] = null
            fireBaseDatabse.collection(tableName).add(data)
        }
    } catch (e) {
        console.log("Error Adding Data");
    }

}

export const updateData = async (tableName, data, id) => {

}

// export const getAllData = async (tableName) => {
//     return fireBaseDatabse.collection(tableName).get()
// }

export const getAllDataSnapShot = (tableName, func) => {
    return fireBaseDatabse.collection(tableName).onSnapshot(func)
}
