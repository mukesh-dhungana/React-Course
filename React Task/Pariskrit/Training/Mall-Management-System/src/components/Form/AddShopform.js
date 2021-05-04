import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import "./addform.css";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";
import { getImageUrl } from "../../utils/getImageUrl";
import { addShop } from "../../utils/firebaseCrud";
import Success from "../Success/Success";
import { useForm } from "react-hook-form";

function Shopform({
  allDatas,
  shopDetails,
  dispatch,
  isShopsOnly = false,
  handleAddMoreShop,
  isEdit,
}) {
  const { mallid } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    // e.preventDefault();
    // const mallToUpdate = allDatas.find((mall) => mall.id === mallid);
    // setIsSubmitted(true);
    // const { shopsurl } = await getImageUrl(shopDetails[0].shopImages);
    // const newShop = shopDetails.map((shop, i) => ({
    //   ...shop,
    //   id: Date.now() + i,
    //   shopImages: shopsurl.map((url, index) => ({
    //     id: shopDetails[i].shopImages[index].id,
    //     imageName: shopDetails[i].shopImages[index].image.name,
    //     url,
    //   })),
    // }));
    // // adding shopdetails to firestore
    // addShop(mallid, mallToUpdate, newShop);
    // setSuccess(true);
    // setTimeout(() => setSuccess(false), 3000);
    // setIsSubmitted(false);
    // dispatch({ type: "Reset_ShopDetails" });
  };

  useEffect(() => {
    return () => {
      dispatch({ type: "Reset_ShopDetails" });
      dispatch({ type: "Reset_MallDetails" });
    };
  }, []);

  return (
    <form
      className={isShopsOnly ? `form` : undefined}
      onSubmit={handleSubmit(onSubmit)}
    >
      {isShopsOnly && <h1>Add Shops</h1>}
      {shopDetails?.map((shop, index) => (
        <div className="shopform" key={shop.id}>
          <TextField
            className="form__inputfield"
            type="text"
            label="Shop Name"
            variant="outlined"
            name="title"
            value={shop?.title}
            onChange={(e) =>
              dispatch({
                type: "handleShopInputChange",
                name: e.target.name,
                value: e.target.value,
                id: index,
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
            value={shop?.description}
            onChange={(e) =>
              dispatch({
                type: "handleShopInputChange",
                name: e.target.name,
                value: e.target.value,
                id: index,
              })
            }
            variant="outlined"
            fullWidth
          />

          <br />
          <input
            className="form__inputfield"
            type="file"
            name="shopImages"
            onChange={(e) =>
              dispatch({
                type: isEdit
                  ? "handleShopImagesEditChange"
                  : "handleShopImagesChange",
                name: e.target.name,
                value: e.target.files,
                id: index,
              })
            }
            multiple
          />
          <ol>
            {shop.shopImages.length > 0 &&
              shop.shopImages.map((image) =>
                isEdit ? (
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
                          index,
                        })
                      }
                    >
                      Remove
                    </p>
                  </li>
                ) : (
                  <li>{image.imageName || image.image.name}</li>
                )
              )}
          </ol>
        </div>
      ))}

      <Button variant="outlined" color="primary" onClick={handleAddMoreShop}>
        Add More
      </Button>

      {isSubmitted && <Loader />}
      {success && <Success />}

      {isShopsOnly && (
        <Button
          type="submit"
          className="form__button"
          color="secondary"
          variant="contained"
        >
          Save
        </Button>
      )}
    </form>
  );
}

export default Shopform;
