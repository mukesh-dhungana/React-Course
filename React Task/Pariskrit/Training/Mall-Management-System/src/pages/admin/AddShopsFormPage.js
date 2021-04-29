import React, { useContext, useEffect } from "react";
import Shopform from "../../components/Form/AddShopform";
import { Context } from "../../context/ContextProvider";
import useFirestore from "../../firebase/useFirestore";

function AddShopsFormPage() {
  const [{ allDatas, shopDetails }, dispatch] = useContext(Context);
  const { docs } = useFirestore("Malls");

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
      />
    </>
  );
}

export default AddShopsFormPage;
