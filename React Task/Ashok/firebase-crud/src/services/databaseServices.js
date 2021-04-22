import { firebaseDatabase } from "../firebase/config/config";

export const addUserService = (user) => {
  return firebaseDatabase.collection("users").add(user);
};

export const getAllUserService = () => {
  return firebaseDatabase.collection("users").get();
};

export const deleteUserService = (docId) => {
  return firebaseDatabase.collection("users").doc(docId).delete();
};

export const usersCollectionReference = () => {
  return firebaseDatabase.collection("users");
};

export const userEditprofile = (docId, data) => {
  return firebaseDatabase
    .collection("users")
    .doc(docId)
    .update({ ...data });
};
