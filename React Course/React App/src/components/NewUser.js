import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import hoc from "./Hoc";

function NewUser(props) {
  //   const {
  //     params: { id },
  //   } = props.match;
  const { id } = useParams();
  useEffect(()=>{
      fetch(id);
  },[])
  console.log(props);
  return <div>This is {props.location?.state?.name} user page</div>;
}

export default hoc()(NewUser);
