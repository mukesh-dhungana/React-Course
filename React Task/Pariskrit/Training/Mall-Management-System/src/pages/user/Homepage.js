import React from "react";
import Container from "../../components/Container/Container";
import InputField from "../../components/InputField/InputField";
import Block from "../../components/Block/Block";
import { useHistory } from "react-router";
import useFirestore from "../../firebase/useFirestore";

function UserHomepage() {
  const history = useHistory();
  const { docs } = useFirestore("Malls");
  return (
    <>
      <InputField placeholder="Search Malls..." />

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
              handleClick={() => history.push("/user/malls/" + mall.id)}
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
              key={mall.id}
              title={mall.shops[0].title}
              subTitle={mall.title}
              image={mall.shops[0].shopImages[0]}
              handleClick={() =>
                history.push(`/user/malls/${mall.id}/${mall.shops[0].id}`)
              }
            />
          ))
        }
        path="/user/allshops"
      />
    </>
  );
}

export default UserHomepage;
