import React from "react";
import { useHistory } from "react-router";
import Block from "../Block/Block";
import Container from "../Container/Container";
import InputField from "../InputField/InputField";

function MallsLists({ malls }) {
  const history = useHistory();
  return (
    <div>
      <InputField placeholder="Search Malls..." />
      <Container
        heading="Malls"
        malls={malls}
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
    </div>
  );
}

export default MallsLists;
