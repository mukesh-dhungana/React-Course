import { firebaseDatabase } from '../../firebase/config'
import { deleteFile } from '../../firebase/fireStorage'
import * as actionType from '../actionType'

export const addMallData = (data) => dispatch => {
    dispatch({ type: actionType.ADD_MALL_REQUEST })
    firebaseDatabase.collection("malls").add(data)
}

// export const onSnapShotData = () => dispatch => {
//     dispatch({ type: actionType.FETCH_MALL_REQUEST })
//     firebaseDatabase.collection("malls").onSnapshot(snap => {
//         snap.forEach(doc => {
//             dispatch({ type: actionType.FETCH_MALL_SUCCESS, payload: { id: doc.id, ...doc.data() } })
//         })
//     }, error => {
//         dispatch({ type: actionType.FETCH_MALL_FAILURE })
//     })
// }

export const getMallData = () => dispatch => {

    dispatch({ type: actionType.FETCH_MALL_REQUEST })
    firebaseDatabase.collection("malls").get().then((doc) => {
        let arr = []
        doc.forEach(da => {
            arr.push({ id: da.id, ...da.data() })
        })
        dispatch({ type: actionType.FETCH_MALL_SUCCESS, payload: arr })
    }).catch(err => {
        dispatch({ type: actionType.FETCH_MALL_FAILURE })
    })
}

export const updateMallData = (id, data) => dispatch => {

}

export const deleteMallData = (data) => dispatch => {
    dispatch({ type: actionType.DELETE_MALL_REQUEST })
    firebaseDatabase.collection("malls").doc(data.id).delete().then(() => {
        deleteFile(data.mall_image.name)
        data.shops.forEach(shop => {
            shop.images.forEach(image => {
                deleteFile(image.id)
            })
        })
        dispatch({ type: actionType.DELETE_MALL_SUCCESS, payload: data.id })

    })
}