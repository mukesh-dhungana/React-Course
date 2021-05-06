import { firebaseStore } from "../firebase/config/config";

export const addUserProfileImage = (image) => {
  return {
    add: firebaseStore.ref(image.name).put(image),
    ref: firebaseStore.ref(image.name),
  };
};

export const deleteUserProfileImage = (imageId) => {
  return firebaseStore.ref(imageId).delete();
};
