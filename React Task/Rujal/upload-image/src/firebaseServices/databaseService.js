import { fireBaseDatabse } from '../firebase/config'

export const addData = async (tableName, data) => {

    try {
        const response = await fireBaseDatabse.collection(tableName).add(data)
        return response
    } catch (e) {
        console.log("Error Adding Data");
    }

}

export const updateData = async (tableName, data, id) => {

}

export const getAllData = async (tableName) => {
    return fireBaseDatabse.collection(tableName).get()
}

export const getAllDataSnapShot = (tableName, func) => {
    return fireBaseDatabse.collection(tableName).onSnapshot(func)
}
