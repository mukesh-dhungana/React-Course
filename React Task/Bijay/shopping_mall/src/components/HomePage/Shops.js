import React from "react";
import { useHistory } from "react-router";
import { fireStore, storage } from "../../firebase/firebase";
import { deleteShopStorage } from "../../utils/Delete";
import Card from "../common/Card";
import ShopCard from "../common/ShopCard";

const Shops = ({ shops, malls }) => {
  const history = useHistory();
  console.log("Shops=> ", shops);

  const handleSingleShopClick = (shopId, mallId) => {
    if (shopId && mallId) {
      history.push(`/shop/${mallId}/${shopId}`);
    }
  };

  const handleShopDelete = async (shopId, mallId) => {
    console.log("Delete Clicked", shopId, mallId);
    let confirm = window.confirm("Are you Sure you want to Delete this Shop");
    if (confirm) {
      await deleteShopStorage(malls, mallId, shopId);
    }
  };

  return (
    <div className="shops-wrapper">
      <div className="shop-heading">
        <h2>SHOPS</h2>
      </div>
      <div className="image-wrapper">
        {/* {shops.map((shop) =>
          shop?.shops.map((item) => (
            <Card
              className="image-container"
              shop={item}
              name={item?.shopName}
              imgUrl={item?.shopImages[0]?.shopImgUrl}
              address={shops.mallName}
              key={shop.id}
            />
          ))
        )} */}
        {shops?.map((shop) => (
          <Card
            className="image-container"
            shop={shop}
            name={
              shop?.shops[0]?.shopName
                ? shop?.shops[0]?.shopName
                : "NO SHOp FOUND"
            }
            imgUrl={shop?.shops[0]?.shopImages[0]?.shopImgUrl}
            address={shop?.mallName}
            key={shop?.mallId}
            id={shop?.shops[0]?.id}
            onShopDelete={handleShopDelete}
            func={handleSingleShopClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Shops;
