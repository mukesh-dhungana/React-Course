import { useEffect } from "react";

function UseCallBack({ onClick }) {
  useEffect(() => {
    console.log("updated");
  }, [onClick]);
  return <div>This is use call back component</div>;
}

export default UseCallBack;
