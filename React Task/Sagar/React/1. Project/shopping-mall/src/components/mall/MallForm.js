import { MyContext } from "../../App";
import Loader from "../Loader/Loader";
import ShopForm from "../shop/ShopForm";
import classes from "./mallform.module.css";
import { useHistory } from "react-router-dom";
import reducer from "../../reducers/reducer";
import { storage, fireStore } from "../../firebase/config";
import shopImageReducer from "../../reducers/shopImageReducer";
import React, { useState, useReducer, useEffect, useContext } from "react";

const MallForm = () => {
  const { allDataDispatch } = useContext(MyContext);

  const history = useHistory();

  const initialValues = {
    mallName: "",
    mallAddress: "",
    mallUrl: {},
    shops: [],
  };

  const shopImageValues = [{ id: 0, images: [] }];

  //States
  const [state, dispatch] = useReducer(reducer, initialValues);
  const [mallImage, setMallImage] = useState(null);
  const [mallImageError, setMallImageError] = useState(null);

  //Shop States
  const [shopImageState, shopImageDispatch] = useReducer(
    shopImageReducer,
    shopImageValues
  );

  //Loading
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  //Change Handler
  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "ADD_MALL_INFO",
      payload: { name: name, value: value },
    });
  };

  const types = ["image/jpeg", "image/png"];
  const imageHandler = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setMallImage(selected);
      setMallImageError(null);
    } else {
      setMallImageError("Please select an image file  (jpeg or png)");
      setMallImage(null);
    }
  };

  const submitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const storageRef = storage.ref();
      let mallImageUrl = null;

      //Mall Image
      if (mallImage !== null) {
        const imageRef = storageRef.child(mallImage.name);
        await imageRef.put(mallImage);
        mallImageUrl = await imageRef.getDownloadURL();
      } else {
        mallImageUrl = null;
      }

      await Promise.all(
        shopImageState?.map((item) =>
          Promise.all(
            item?.images?.map((image) =>
              storage.ref().child(image.name).put(image)
            )
          )
        )
      );

      const shopImageUrl = await Promise.all(
        shopImageState?.map((item) =>
          Promise.all(
            item?.images?.map((image) =>
              storage.ref(image.name).getDownloadURL()
            )
          )
        )
      );

      let mall = {
        mallId: Math.random() * 9999,
        mallName: state?.mallName,
        mallAddress: state?.mallAddress,
        mallImage: {
          id: Math.random() + mallImage?.name,
          imageName: mallImage?.name,
          imageUrl: mallImageUrl,
        },
      };

      let shops = state?.shops?.map((s, i) => ({
        id: i,
        shopName: s?.shopName,
        shopDescription: s?.shopDescription,
        shopImages: shopImageUrl[i]?.map((items, index) => ({
          id: Math.random() + shopImageState[i]?.images[index]?.name,
          ImageName: shopImageState[i]?.images[index]?.name,
          url: items,
        })),
      }));

      //FireStore
      fireStore
        .collection("Shopping Mall")
        .doc(state?.mallName)
        .set({
          ...mall,
          shops,
        });

      dispatch({
        type: "ADD_IMAGE_URLS",
        payload: { mallImageUrl, shops, mallImage },
      });

      allDataDispatch({
        type: "ADD_DATA",
        payload: { mall, shops },
      });

      history.goBack();
    } catch (err) {
      console.log("Error", err);
    }
  };

  //Add New Shop Form
  const newShopForm = () => {
    dispatch({ type: "ADD_SHOP_FORM", payload: { ind: Math.random() } });
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.formContainer}>
        {isLoading === true && (
          <div className={classes.loaderPosition}>
            <Loader />
          </div>
        )}
        <form className={classes.form} action="" onSubmit={submitHandler}>
          <div className={classes.innerDiv}>
            <input
              type="text"
              placeholder="Name of Mall"
              name="mallName"
              value={state?.mallName}
              onChange={changeHandler}
              className={classes.input}
            />
            <input
              type="text"
              placeholder="Address"
              name="mallAddress"
              onChange={changeHandler}
              value={state?.mallAddress}
              className={classes.input}
            />
            <label className={classes.label}>
              <input
                className={classes.upload}
                type="file"
                onChange={imageHandler}
              />
              <span>
                <i className="fas fa-image"></i>
              </span>
              <span className={classes.text}>(Add Image)</span>
            </label>
            {mallImageError && <p>{mallImageError}</p>}
          </div>
          <div>{mallImage && mallImage?.name}</div>

          {/*------- Shop ---------*/}

          <h4 className={classes.name}>Shop</h4>

          {state?.shops?.map((s, index) => (
            <div key={index}>
              <ShopForm
                {...{
                  s,
                  dispatch,
                  index,
                  shopImageState,
                  shopImageDispatch,
                }}
              />
              <div className={classes.line}></div>
            </div>
          ))}

          <div onClick={newShopForm} className={classes.addShop}>
            <span className={classes.icon}>
              <i className="far fa-plus-circle"></i>
            </span>
            Add Shop
          </div>

          {/* --------------------- */}

          <input
            className={isLoading ? classes.submitBtnOnLoad : classes.submitBtn}
            type="submit"
            value={isLoading ? "Loading..." : "Save"}
          />
        </form>
      </div>
    </div>
  );
};

export default MallForm;
