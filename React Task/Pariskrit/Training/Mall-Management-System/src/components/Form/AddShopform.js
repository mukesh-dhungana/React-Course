import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./addform.css";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";
import { getImageUrl } from "../../utils/getImageUrl";
import { addShop } from "../../utils/firebaseCrud";

function Shopform({ allDatas, shopDetails, dispatch, isShopsOnly = false }) {
  const { mallid } = useParams();
  const [isSubmitted, setIsSubmitted] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mallToUpdate = allDatas.find((mall) => mall.id === mallid);
    console.log(allDatas, mallToUpdate);
    setIsSubmitted(true);
    const { shopsurl } = await getImageUrl(shopDetails);

    const newShop = shopDetails.map((shop, i) => ({
      ...shop,
      id: Date.now() + i,
      shopImages: shopsurl[i],
    }));

    // adding shopdetails to firestore
    addShop(mallid, mallToUpdate, newShop);

    setIsSubmitted(false);
  };
  return (
    <form className={isShopsOnly ? `form` : undefined} onSubmit={handleSubmit}>
      {isShopsOnly && <h1>Add Shops</h1>}
      {shopDetails.map((shop, index) => (
        <div className="shopform" key={index}>
          <TextField
            className="form__inputfield"
            type="text"
            label="Shop Name"
            variant="outlined"
            name="title"
            value={shopDetails.title}
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
            value={shopDetails.description}
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
          <input
            className="form__inputfield"
            type="file"
            name="shopImages"
            onChange={(e) =>
              dispatch({
                type: "handleShopImagesChange",
                name: e.target.name,
                value: e.target.files,
                id: index,
              })
            }
            multiple
          />
        </div>
      ))}

      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch({ type: "Add_ShopFields" })}
      >
        Add More
      </Button>

      {isSubmitted && <Loader />}

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
