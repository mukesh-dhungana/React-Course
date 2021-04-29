import React from "react";
import { Button } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import "./admin.css";
import Container from "../Container/Container";
import Block from "../Block/Block";
import { useHistory } from "react-router";
import useFirestore from "../../firebase/useFirestore";

function Admin() {
  const history = useHistory();
  const { docs } = useFirestore("Malls");

  return (
    <div className="admin">
      <Navbar />
      <Button
        className="addbutton"
        color="primary"
        variant="contained"
        size="large"
        onClick={() => history.push("/admin/addmall")}
      >
        Add New Mall
      </Button>
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
            />
          ))
        }
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
            />
          ))
        }
      />
    </div>
  );
}

export default Admin;
