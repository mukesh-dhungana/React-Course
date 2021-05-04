import React, { useContext, useEffect } from "react";
import Shopform from "../../components/Form/AddShopform";
import { Context } from "../../context/ContextProvider";
import useFirestore from "../../firebase/useFirestore";

function AddShopsFormPage() {
  const [{ allDatas, shopDetails }, dispatch] = useContext(Context);
  const { docs } = useFirestore("Malls");

  const handleAddMoreShop = () => {
    if (
      shopDetails[shopDetails.length - 1].title === "" ||
      shopDetails[shopDetails.length - 1].description === "" ||
      !shopDetails[shopDetails.length - 1].shopImages.length
    ) {
      alert("Please First Fill Up The Present Shop Form");
    } else {
      dispatch({ type: "Add_ShopFields" });
    }
  };

  useEffect(() => {
    dispatch({ type: "Save_AllData", payload: docs });
  }, [docs]);

  return (
    <>
      <Shopform
        allDatas={allDatas}
        shopDetails={shopDetails}
        dispatch={dispatch}
        isShopsOnly={true}
        handleAddMoreShop={handleAddMoreShop}
      />
    </>
  );
}

export default AddShopsFormPage;
