import React from "react";
import "./css/modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    const {
      values: { gender, title, first, last, loc, img },
    } = this.props;

    return (
      <div className="modalContainer">
        <div className="modal">
          <div className="times">
            <i className="fas fa-times" onClick={this.props.handleModal}></i>
          </div>
          <div className="userData">
            <img src={img} alt="" />
            <div className="detail">
              Hi, This is {title}.
              <b>
                {first} {last}
              </b>
              ({gender}) from{" "}
              <b>
                <span style={{ color: "rgb(113, 182, 199)" }}>{loc}</span>
              </b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
