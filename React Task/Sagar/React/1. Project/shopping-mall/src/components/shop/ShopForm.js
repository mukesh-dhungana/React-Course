import React, { useState } from "react";
import classes from "./shopform.module.css";

const ShopForm = ({
  d,
  data,
  s,
  dispatch,
  index,
  shopImageState,
  shopImageDispatch,
}) => {
  const [shopImageError, setShopImageError] = useState(null);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "ADD_SHOP_INFO",
      payload: { name: name, value: value, index: index },
    });
  };

  const types = ["image/jpeg", "image/png"];
  const shopImageHandler = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let selectedShopImages = e.target.files[i];

      if (selectedShopImages && types.includes(selectedShopImages.type)) {
        shopImageDispatch({
          type: "ADD",
          payload: { index, selectedShopImages },
        });
      } else {
        setShopImageError("Please select an image file  (jpeg or png)");
      }
    }
  };

  const closeShopForm = () => {
    dispatch({
      type: "REMOVE_SHOP_FORM",
      payload: {
        s,
      },
    });
  };

  return (
    <div className={classes.shopContainer}>
      <div onClick={closeShopForm} className={classes.close}>
        <i className="fas fa-times"></i>
      </div>
      <div className={classes.innerDiv}>
        <input
          type="text"
          placeholder="Name of Shop"
          name="shopName"
          value={data ? d?.shopName : s.shopName}
          onChange={onChangeHandler}
          className={classes.input}
        />
        <textarea
          type="text"
          placeholder="Description"
          name="shopDescription"
          value={data ? d?.shopDescription : s?.shopDescription}
          onChange={onChangeHandler}
          className={classes.textarea}
        />
        {shopImageError && <p>{shopImageError}</p>}
        <label className={classes.label}>
          <input multiple type="file" onChange={shopImageHandler} />
          <span>
            <div className={classes.imgButton}>Add Image</div>
          </span>
        </label>
        <p className={classes.para}>**First chosen Image will be Thumnail</p>
      </div>

      <div className={classes.selectedImages}>
        {shopImageState &&
          shopImageState?.map(
            (image, ind) =>
              ind === index &&
              image?.images?.map((img, i) => (
                <p key={i} className={classes.image}>
                  <button
                    className={classes.button}
                    type="button"
                    onClick={() =>
                      shopImageDispatch({
                        type: "REMOVE_IMAGE",
                        payload: { outerIndex: ind, name: img?.name },
                      })
                    }
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  {img?.name}
                </p>
              ))
          )}
      </div>
    </div>
  );
};

export default ShopForm;
