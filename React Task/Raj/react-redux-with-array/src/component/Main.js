import "./Main.css";
import Form from "./Form";
import { useSelector } from "react-redux";

function Main() {
  const selector = useSelector(state => state.posts);

  return (
    <div className="App">
      {selector.map((x, i) => {
        return (
          <div className="data" key={i}>
            <Form postData={x} />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
