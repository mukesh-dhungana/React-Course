import { useEffect, useState } from "react";

const User = (props) => {
  const [title, changeTitle] = useState("title");
  const [name, changeName] = useState("ds");
  // useEffect(() => {
  //   return () => {
  //     console.log("user unmounted");
  //   };
  // });
  useEffect(() => {
    // const subscription = props.source.subscribe();
    return () => {
      // Clean up the subscription
      console.log("user unmounted");
    };
  }, []);
  return (
    <>
      <div>
        {title}
        <button onClick={() => changeTitle()}>Change title</button>
        <button onClick={() => changeName("dsdsds")}>Change name</button>
      </div>
    </>
  );
};

export default User;
