import React, { useState, useContext, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import { Context } from "../../context/ContextProvider";
import { useParams } from "react-router";
import { projectFirestore, projectStorage } from "../../firebase/config";
import Loader from "../Loader/Loader";
import { getImageUrl } from "../../utils/getImageUrl";

function EditShopForm() {
  const [{ shopDetails, allDatas }, dispatch] = useContext(Context);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mallid, shopid } = useParams();

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    let editedShopData = {};
    const mallToUpdate = allDatas.find((mall) => mall.id === mallid);
    const isNewImages = shopDetails[0].shopImages.some(
      (image) => typeof image === "object"
    );
    console.log(shopDetails[0]);
    if (isNewImages) {
      const { shopsurl } = await getImageUrl(shopDetails);

      editedShopData = {
        ...shopDetails[0],
        shopImages: shopsurl[0],
      };
    } else {
      editedShopData = {
        ...shopDetails[0],
        shopImages: [...shopDetails[0].shopImages],
      };
    }

    projectFirestore
      .collection("Malls")
      .doc(mallid)
      .update({
        shops: mallToUpdate.shops.map((shop) =>
          shop.id === +shopid ? editedShopData : shop
        ),
      })
      .then(() => console.log("succesfully added"))
      .catch((error) => console.log(error));

    setIsSubmitted(false);
    dispatch({ type: "Reset_ShopDetails" });
  };

  useEffect(() => {
    console.log(shopDetails);

    const selectedMall = allDatas.find((mall) => mall.id === mallid);
    const shopToEdit = selectedMall.shops.find((shop) => shop.id === +shopid);
    dispatch({ type: "Save_Shops", payload: [shopToEdit] });
  }, [shopid]);

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
            value={shopDetails[0].title}
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
            value={shopDetails[0].description}
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
                type: "handleShopImagesChange",
                name: e.target.name,
                value: e.target.files,
                id: 0,
              })
            }
            multiple
          />
        </div>
        {isSubmitted && <Loader />}
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
