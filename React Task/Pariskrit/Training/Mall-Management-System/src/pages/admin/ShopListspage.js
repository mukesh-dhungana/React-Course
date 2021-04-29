import React from "react";
import Shoplists from "../../components/Shoplists/Shoplists";

function AdminShopLists() {
  return (
    <>
      <Shoplists isAdmin={true} />
    </>
  );
}

export default AdminShopLists;
