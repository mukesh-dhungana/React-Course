import React, { useState } from "react";
import classes from "./shopform.module.css";

import { storage, fireStore } from "../../firebase/config";

const ShopForm = ({
  dataShop,
  editData,
  editDispatch,
  index,
  setImagesToRemove,
  addedShopImagesDispatch,
  addedShopImages,
  // shopImageState,
  // shopImageDispatch,
}) => {
  const [shopImageError, setShopImageError] = useState(null);

  console.log("sssss", dataShop);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    editDispatch({
      type: "EDIT_SHOP_INFO",
      payload: { name: name, value: value, index: index },
    });
  };

  const types = ["image/jpeg", "image/png"];
  const shopImageHandler = (e, shopData) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let selectedShopImages = e.target.files[i];

      if (selectedShopImages && types.includes(selectedShopImages.type)) {
        addedShopImagesDispatch({
          type: "ADD",
          payload: { index, selectedShopImages },
        });
      } else {
        setShopImageError("Please select an image file  (jpeg or png)");
      }
    }
  };

  const closeShopForm = (dataShop) => {
    editDispatch({
      type: "REMOVE_SHOP_FORM",
      payload: {
        dataShop,
      },
    });
    setImagesToRemove((prevState) => [
      ...prevState,
      ...dataShop.shopImages.map((image) => image),
    ]);
  };

  //Remove Image

  const removeImage = (img, index) => {
    setImagesToRemove((prevState) => [...prevState, img]);
    editDispatch({
      type: "REMOVE_IMAGE",
      payload: {
        img,
        index,
      },
    });
  };

  // const removeImageFromArray = (img, index) => {
  //   setAddedShopImages([
  //     ...addedShopImages.map((item, ind) =>
  //       ind === index
  //         ? {
  //             ...item,
  //             images: item.images.filter((i) => i.name !== img.name),
  //           }
  //         : item
  //     ),
  //   ]);
  // };

  return (
    <div className={classes.shopContainer}>
      <div onClick={() => closeShopForm(dataShop)} className={classes.close}>
        <i className="fas fa-times"></i>
      </div>
      <div className={classes.innerDiv}>
        <input
          type="text"
          placeholder="Name of Shop"
          name="shopName"
          value={dataShop?.shopName}
          onChange={onChangeHandler}
          className={classes.input}
        />
        <textarea
          type="text"
          placeholder="Description"
          name="shopDescription"
          value={dataShop?.shopDescription}
          onChange={onChangeHandler}
          className={classes.textarea}
        />
        {shopImageError && <p>{shopImageError}</p>}
        <label className={classes.label}>
          <input
            multiple
            type="file"
            onChange={(e) => shopImageHandler(e, dataShop)}
          />
          <span>
            <div className={classes.imgButton}>Add Image</div>
          </span>
        </label>
      </div>

      <div className={classes.selectedImages}>
        {dataShop.shopImages &&
          dataShop.shopImages.map((img, i) => (
            <p key={i} className={classes.image}>
              <button
                className={classes.button}
                type="button"
                onClick={() => removeImage(img, index)}
              >
                <i className="fas fa-times"></i>
              </button>
              {img.ImageName}
            </p>
          ))}
        {addedShopImages &&
          addedShopImages.map(
            (img, ind) =>
              ind === index &&
              img.images.map((img, i) => (
                <p key={i} className={classes.image}>
                  <button
                    className={classes.button}
                    type="button"
                    onClick={() =>
                      addedShopImagesDispatch({
                        type: "REMOVE_IMAGE",
                        payload: { outerIndex: ind, name: img.name },
                      })
                    }
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  {img.name}
                </p>
              ))
          )}
      </div>
    </div>
  );
};

export default ShopForm;
