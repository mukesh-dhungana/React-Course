import { projectStorage } from "../firebase/config";

export const getImageUrl = async (shopDetails) => {
  /*storing shops images in storage and getting url*/
  await Promise.all(
    shopDetails.map((shop) =>
      Promise.all(
        shop.shopImages.map((image) =>
          projectStorage.ref(image.name).put(image)
        )
      )
    )
  );

  const shopsurl = await Promise.all(
    shopDetails.map((shop) =>
      Promise.all(
        shop.shopImages.map((image) =>
          projectStorage.ref(image.name).getDownloadURL()
        )
      )
    )
  );
  console.log(shopsurl);

  return { shopsurl };
};
