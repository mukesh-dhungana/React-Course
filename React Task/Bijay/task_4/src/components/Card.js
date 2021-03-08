import React, { Component } from "react";
import Modal from "./Modal";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {

    const modalShow = (id) => {
      this.setState({
        showModal: true,
      });
      console.log("ShowModal", id);
    };

    const { post  } = this.props;
    console.log("Card=> ", post);
    return (
      <>
        <div className="card-body" onClick={() => modalShow(post.id)}>
          <div className="header">
            <h4>{post.title}</h4>
          </div>
          <div className="footer">
            <p>{post.author}</p>
          </div>
        </div>

        { this.state.showModal && <Modal post={post}  onModalClick={()=>this.setState({showModal:false})}/>} 
      </>
    );
  }
}

export default Card;
