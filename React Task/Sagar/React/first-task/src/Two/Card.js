import React, { Component } from "react";
import "./css/card.css";
import Modal from "./Modal";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "",
      first: "",
      last: "",
      gender: "",
      loc: "",
      img: null,
    };
  }

  render() {
    const { data } = this.props;
    const { title, first, last, gender, loc, img, showModal } = this.state;
    const values = { title, first, last, gender, loc, img, showModal };

    return (
      <div className="Container">
        {data.map((user) => (
          <div
            key={user.name.first}
            className="Wrapper"
            onClick={() =>
              this.setState({
                showModal: true,
                title: user.name.title,
                first: user.name.first,
                last: user.name.last,
                gender: user.gender,
                loc: user.location.country,
                img: user.picture.large,
              })
            }
          >
            <img src={user.picture.large} alt="img" />
            <div className="info">
              <h2>Info:</h2>
              <div className="detail">
                <p id="name">
                  {user.name.title}.{user.name.first} {user.name.last}
                </p>
                <p>({user.gender})</p>
                <p>
                  {user.location.street.number} {user.location.street.name},
                  {user.location.city},
                  <span id="country">{user.location.country}</span>
                </p>
              </div>
            </div>
          </div>
        ))}

        {this.state.showModal ? (
          <>
            <div
              onClick={() => this.setState({ showModal: false })}
              className="backDrop"
            ></div>
            <Modal
              handleModal={() => this.setState({ showModal: false })}
              values={values}
            />
          </>
        ) : null}
      </div>
    );
  }
}

export default Card;
