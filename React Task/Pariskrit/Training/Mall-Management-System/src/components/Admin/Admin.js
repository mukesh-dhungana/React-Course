import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import "./admin.css";
import Container from "../Container/Container";
import Block from "../Block/Block";
import { useHistory } from "react-router";
import useFirestore from "../../firebase/useFirestore";
import Confirmation from "../Modal/Confirmation";
import {
  deleteMall,
  deleteMallImageFromStorage,
} from "../../utils/firebaseCrud";

function Admin() {
  const history = useHistory();
  const { docs } = useFirestore("Malls");
  const [openModal, setOpenModal] = useState(false);
  const [mallId, setMallId] = useState(null);

  const handleDelete = async () => {
    const deletedMall = docs.find((mall) => mall.id === mallId);

    //delete mall from firestore
    deleteMall(mallId);

    //delete mall images from storage
    await deleteMallImageFromStorage(deletedMall);
    setOpenModal(false);
  };

  return (
    <div className="admin">
      <Navbar />
      <div className="admin__button">
        <Button
          className="addbutton"
          color="primary"
          variant="contained"
          size="large"
          onClick={() => history.push("/admin/addmall")}
        >
          Add New Mall
        </Button>
      </div>

      <Container
        heading="Malls"
        malls={docs.slice(0, 3)}
        render={(malls) =>
          malls?.map((mall) => (
            <Block
              key={mall.id}
              title={mall.title}
              subTitle={mall.address}
              image={mall.image}
              isAdmin="true"
              handleClick={() => history.push("/admin/malls/" + mall.id)}
              handleDelete={(e) => {
                e.stopPropagation();
                setOpenModal(true);
                setMallId(mall.id);
              }}
            />
          ))
        }
        path="/admin/allmalls"
      />
      <Container
        heading="Shops"
        malls={docs.slice(0, 3)}
        render={(malls) =>
          malls?.map((mall) => (
            <Block
              key={mall?.id}
              title={mall?.shops[0]?.title}
              subTitle={mall?.title}
              image={mall?.shops[0]?.shopImages[0]}
              isAdmin="true"
            />
          ))
        }
        path="/admin/allshops"
      />
      <Confirmation
        openModal={openModal}
        handleClose={() => setOpenModal(false)}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Admin;
