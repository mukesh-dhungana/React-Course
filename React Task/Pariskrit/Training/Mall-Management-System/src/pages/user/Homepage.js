import React from "react";
import Container from "../../components/Container/Container";
import InputField from "../../components/InputField/InputField";
import Block from "../../components/Block/Block";
import { useHistory } from "react-router";

function UserHomepage({ malls }) {
  const history = useHistory();
  return (
    <>
      <InputField placeholder="Search Malls..." />

      <Container
        heading="Malls"
        malls={malls.slice(0, 3)}
        render={(malls) =>
          malls?.map((mall) => (
            <Block
              key={mall.id}
              title={mall.title}
              subTitle={mall.address}
              image={mall.image}
              handleClick={() => history.push("/user/malls/" + mall.title)}
            />
          ))
        }
      />
      <Container
        heading="Shops"
        malls={malls.slice(0, 3)}
        render={(malls) =>
          malls?.map((mall) => (
            <Block
              key={mall.id}
              title={mall.shops[0].title}
              subTitle={mall.title}
              image={mall.shops[0].image[0]}
              handleClick={() => history.push("/user/malls/" + mall.title)}
            />
          ))
        }
      />
    </>
  );
}

export default UserHomepage;
