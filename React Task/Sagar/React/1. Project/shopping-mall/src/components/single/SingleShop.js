import cls from "./singleMall.module.css";
import { useParams } from "react-router-dom";
import { fireStore } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import classes from "../Dashboard/dashboard.module.css";

const SingleShop = () => {
  const [mall, setMall] = useState();
  const { id, type } = useParams();
  const docId = id.replace("_", " ");

  useEffect(() => {
    const fetchData = async () => {
      await fireStore
        .collection("Shopping Mall")
        .doc(docId)
        .onSnapshot((doc) => setMall(doc.data()));
    };

    fetchData();
  }, [docId]);

  return (
    <div>
      {mall?.shops?.map(
        (shop, ind) =>
          type === shop.shopName && (
            <div key={ind} className={classes.main}>
              <div
                style={{ borderBottom: "2px solid rgb(236, 78, 78)" }}
                className={cls.name}
              >
                <h1>{shop.shopName}</h1>
                <h3>{shop.shopDescription}</h3>
              </div>

              <div className={classes.container}>
                {shop.shopImages &&
                  shop.shopImages.map((s, i) => (
                    <div key={i} className={classes.wrapper}>
                      <div className={classes.imageContainer}>
                        <img
                          className={classes.image}
                          src={s.url}
                          alt="shopImage"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default SingleShop;
