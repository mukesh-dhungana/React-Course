import React, { useState, useEffect, useContext } from "react";
import Container from "../Container/Container";
import { useHistory, useParams } from "react-router";
import Block from "../Block/Block";
import InputField from "../InputField/InputField";
import "./shoplists.css";
import { Button } from "@material-ui/core";
import { projectFirestore, projectStorage } from "../../firebase/config";
import useFirestore from "../../firebase/useFirestore";

function Shoplists({ isAdmin }) {
  const { mallid } = useParams();
  const { docs } = useFirestore("Malls");
  const [selectedMall, setSelectedMall] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(selectedMall).length <= 0 && docs.length > 0) {
      setSelectedMall(docs.find((mall) => mall.id === mallid));
    }
  }, [selectedMall, docs]);

  const handleDelete = (e, id) => {
    e.stopPropagation();
    const shopsAfterDeleted = selectedMall.shops.filter(
      (shop) => shop.id !== id
    );

    projectFirestore
      .collection("Malls")
      .doc(mallid)
      .update({ shops: shopsAfterDeleted })
      .then(() =>
        setSelectedMall({ ...selectedMall, shops: shopsAfterDeleted })
      )
      .then((error) => console.log(error));
  };

  return (
    <div className="shoplists">
      <div className="shoplists__headings">
        <h1>{selectedMall?.title}</h1>
        <h2>{selectedMall?.address}</h2>
      </div>
      <InputField placeholder="Search Shops..." />
      {isAdmin && (
        <Button
          ClassName="addbutton"
          color="primary"
          variant="contained"
          size="large"
          onClick={() => history.push(`/admin/${mallid}/addshop`)}
        >
          Add Shops
        </Button>
      )}
      <Container
        heading="Shops"
        malls={selectedMall?.shops}
        render={(shops) =>
          shops?.map((shop) => (
            <Block
              key={shop.id}
              id={shop.id}
              title={shop.title}
              image={shop.shopImages[0]}
              handleClick={() =>
                history.push(`/admin/malls/${mallid}/${shop.id}`)
              }
              handleDelete={(e) => handleDelete(e, shop.id)}
              isAdmin={isAdmin}
            />
          ))
        }
      />
    </div>
  );
}

export default Shoplists;
