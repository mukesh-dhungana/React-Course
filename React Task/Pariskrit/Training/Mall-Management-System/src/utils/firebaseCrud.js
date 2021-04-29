import { projectFirestore } from "../firebase/config";

export const addMallAndShop = (mallDetails, mallurl, shopDetails, shopsurl) => {
  projectFirestore.collection("Malls").add({
    title: mallDetails.title,
    address: mallDetails.address,
    image: mallurl,
    shops: shopDetails.map((shop, index) => ({
      id: Date.now() + index,
      title: shop.title,
      description: shop.description,
      shopImages: shopsurl[0],
    })),
  });
};

export const addShop = (mallid, mallToUpdate, newShop) => {
  projectFirestore
    .collection("Malls")
    .doc(mallid)
    .update({
      shops: [...mallToUpdate.shops, ...newShop],
    })
    .then(() => console.log("succesfully added"))
    .catch((error) => console.log(error));
};
