import { Component } from "react";




class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showPop: true
    };
  }


  render() {
    // const hideModal = () => {
    //     document.querySelector('.modal').style.display = 'none'
    //     this.setState({
    //         showPop: false
    //     })
    //     console.log('Hide Me')
    // }

    const {post, state, onModalClick} = this.props
    console.log('modal',state,this.state)
    return (
      <div className="modal">
        <div className="modal-content">
          <button className="btn btn-close" onClick={()=>onModalClick()} >Close</button>
          <div className="header">
            <h4>{post.title}</h4>
          </div>
          <div className="footer">
            <p>{post.author}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
