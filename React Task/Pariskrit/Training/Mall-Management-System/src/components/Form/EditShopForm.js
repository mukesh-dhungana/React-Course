import React, { useState, useEffect, useContext } from "react";
import { Button, TextField } from "@material-ui/core";

import { useParams } from "react-router";
import Loader from "../Loader/Loader";
import { getImageUrl } from "../../utils/getImageUrl";
import {
  deleteShopImageFromStorage,
  updateShop,
} from "../../utils/firebaseCrud";
import Success from "../Success/Success";
import { Context } from "../../context/ContextProvider";

function EditShopForm({ allDatas }) {
  const [{ shopDetails }, dispatch] = useContext(Context);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [shopToEdit, setShopToEdit] = useState({});
  const { mallid, shopid } = useParams();

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    let editedShopData = {};
    const removedImages = [];

    const mallToUpdate = allDatas.find((mall) => mall.id === mallid);

    const isNewImages = shopDetails[0].shopImages.filter(
      (image) => image?.image?.name
    );

    for (let i = 0; i <= shopToEdit.shopImages.length - 1; i++) {
      if (
        shopDetails[0].shopImages.findIndex(
          (image) => image.id === shopToEdit.shopImages[i].id
        ) === -1
      ) {
        removedImages.push(shopToEdit.shopImages[i]);
      }
    }

    if (removedImages.length > 0) {
      await deleteShopImageFromStorage(removedImages);
    }
    if (isNewImages.length > 0) {
      const { shopsurl } = await getImageUrl(isNewImages);

      editedShopData = {
        ...shopDetails[0],
        shopImages: [
          ...shopDetails[0].shopImages.filter((image) => !image?.image?.name),
          ...shopsurl.map((url, index) => ({
            id: isNewImages[index].id,
            imageName: isNewImages[index].imageName,
            url,
          })),
        ],
      };
    } else {
      editedShopData = {
        ...shopDetails[0],
        shopImages: [...shopDetails[0].shopImages],
      };
    }

    //Updating the shop
    updateShop(mallid, mallToUpdate, shopid, editedShopData);

    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
    setIsSubmitted(false);
    dispatch({ type: "Reset_ShopDetails" });
  };

  useEffect(() => {
    const selectedMall = allDatas.find((mall) => mall.id === mallid);
    const shopToEdit = selectedMall?.shops.find((shop) => shop.id === +shopid);
    setShopToEdit(shopToEdit);
    dispatch({ type: "Save_Shops", payload: [shopToEdit] });

    return () => dispatch({ type: "Reset_ShopDetails" });
  }, [allDatas, shopid]);

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <h1>Edit Shop</h1>
        <div className="shopform">
          <TextField
            className="form__inputfield"
            type="text"
            label="Shop Name"
            variant="outlined"
            name="title"
            value={shopDetails[0]?.title}
            onChange={(e) =>
              dispatch({
                type: "handleShopInputChange",
                name: e.target.name,
                value: e.target.value,
                id: 0,
              })
            }
            fullWidth
          />

          <TextField
            className="form__inputfield"
            label="Description"
            multiline
            rows={4}
            name="description"
            value={shopDetails[0]?.description}
            onChange={(e) =>
              dispatch({
                type: "handleShopInputChange",
                name: e.target.name,
                value: e.target.value,
                id: 0,
              })
            }
            variant="outlined"
            fullWidth
          />
          <input
            className="form__inputfield"
            type="file"
            name="shopImages"
            onChange={(e) =>
              dispatch({
                type: "handleShopImagesEditChange",
                name: e.target.name,
                value: e.target.files,
                id: 0,
              })
            }
            multiple
          />
          <ol>
            {shopDetails[0]?.shopImages?.length > 0 &&
              shopDetails[0].shopImages.map((image) => (
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px 0",
                  }}
                >
                  {image.imageName}
                  <p
                    style={{
                      color: "red",
                      fontWeight: "800",
                      margin: "0 10px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      dispatch({
                        type: "handleShopImagesRemove",
                        id: image.id,
                        index: 0,
                      })
                    }
                  >
                    Remove
                  </p>
                </li>
              ))}
          </ol>
        </div>
        {isSubmitted && <Loader />}
        {isSuccess && <Success />}
        <Button
          type="submit"
          className="form__button"
          color="secondary"
          variant="contained"
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditShopForm;
