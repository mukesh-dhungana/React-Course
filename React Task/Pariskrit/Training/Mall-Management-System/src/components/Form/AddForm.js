import { Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import Loader from "../Loader/Loader";
import "./addform.css";
import Shopform from "./AddShopform";
import { projectStorage, projectFirestore } from "../../firebase/config";
import { Context } from "../../context/ContextProvider";
import AddMallform from "./AddMallform";
import { getImageUrl } from "../../utils/getImageUrl";
import { addMallAndShop } from "../../utils/firebaseCrud";

function AddForm() {
  const [{ shopDetails, mallDetails }, dispatch] = useContext(Context);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // const handleAddMoreShop = () => {
  //   if (
  //     shopDetails[shopDetails.length - 1].title === "" ||
  //     shopDetails[shopDetails.length - 1].description === "" ||
  //     !shopDetails[shopDetails.length - 1].images.length
  //   ) {
  //     alert("Please First Fill Up The Present Shop Form");
  //   } else {
  //     setShopDetails([
  //       ...shopDetails,
  //       { id: ++shopNumber, title: "", description: "", images: [] },
  //     ]);
  //   }
  // };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      !mallDetails.image ||
      shopDetails.some((shop) => shop.shopImages.length === 0)
    ) {
      alert("please provide at least one image");
      return;
    }

    setIsSubmitted(true);
    /* storing mall image in storage and getting url */
    await projectStorage.ref(mallDetails.image.name).put(mallDetails.image);
    const mallurl = await projectStorage
      .ref(mallDetails.image.name)
      .getDownloadURL();

    const { shopsurl } = await getImageUrl(shopDetails);

    /*saving all data to firestore*/
    addMallAndShop(mallDetails, mallurl, shopDetails, shopsurl);

    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
    setIsSubmitted(false);
  };

  return (
    <div className="addform">
      <h1 className="addform__heading">Add Mall</h1>
      <form className="form" onSubmit={onSubmit}>
        <AddMallform mallDetails={mallDetails} dispatch={dispatch} />

        <h1 className="addform__heading">Add Shops</h1>

        <Shopform shopDetails={shopDetails} dispatch={dispatch} />
        {isSubmitted && <Loader />}
        {isSuccess && <div className="alert__success">SuccessFully Saved!</div>}

        <Button
          type="submit"
          className="form__button"
          color="secondary"
          variant="contained"
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default AddForm;
