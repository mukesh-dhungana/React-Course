import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router";
import { Context } from "../../context/ContextProvider";
import { Button } from "@material-ui/core";
import "./shop.css";
import useFirestore from "../../firebase/useFirestore";

function Shop({ isAdmin = false }) {
  const { mallid, shopid } = useParams();
  const { docs } = useFirestore("Malls");
  const [shops, setShops] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (shops.length === 0 && docs.length > 0) {
      const selectedMall = docs.find((mall) => mall.id === mallid);
      setShops(selectedMall.shops.find((shop) => shop.id === +shopid));
    }
  }, [docs]);

  return (
    <div className="shop">
      <div className="shop__headings">
        <h1>{shops.title}</h1>
        <p>
          The group has established itself as the biggest footwear producing
          group in Nepal. In 1990, we launched a mid-priced, value for money
          brand called GOLDSTAR to service more price conscious markets.
          GOLDSTAR is a robust brand made with genuine materials and modern
          technology.
        </p>
      </div>
      {isAdmin && (
        <Button
          ClassName="addbutton"
          color="primary"
          variant="contained"
          size="large"
          onClick={() => history.push(`/admin/${mallid}/${shopid}/editshop`)}
        >
          Edit Shop
        </Button>
      )}
      <div className="shop__images">
        {shops?.shopImages?.map((shop, index) => (
          <img key={index} src={shop.url} alt="imageess" />
        ))}
      </div>
    </div>
  );
}

export default Shop;
