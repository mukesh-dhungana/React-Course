import {
  takeEvery,
  put,
  delay,
  call,
  all,
  takeLatest,
} from "redux-saga/effects";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

function* watchIncrementCount() {
  yield takeLatest("increment", incrementCount);
}
function* watchfetchUsers() {
  yield takeEvery("fetchUsers", fetchUsers);
}

function* incrementCount() {
  console.log("sagas");
  yield delay(4000);
  yield put({ type: "counter/increment" });
}
function* fetchUsers() {
  console.log("sagas");
  //yield delay(4000);
  yield put({ type: "user/loading" });
  yield delay(1000);
  const data = yield getUserAction();
  console.log(data);
  yield put({ type: "user/getUsers", payload: data });
}

export const getUserAction = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/")
      console.log("dsdsd")
      return await response.data.json()
    }
  )

export function* rootSaga() {
  yield all([watchIncrementCount(), watchfetchUsers()]);
}
