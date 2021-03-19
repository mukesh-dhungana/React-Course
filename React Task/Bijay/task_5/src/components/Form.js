import { Component } from "react";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        formData: []
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    // let datas = [...this.state.formData];
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let email = e.target.email.value;
    let newData = {
        firstName, lastName, email
    }
    this.props.onSubmit(newData);

    // console.log('Form Submitted', newData);
    e.target.reset();
}
  render() {
    return (
      <>
        <div className="form-wrap">
          <div className="testbox">
            <form action="" onSubmit={(e)=> this.submitForm(e)}>
              <h1>Complaint Form</h1>
              <p>Please fill in the form</p>
              <hr />
              <div className="item">
                <p>Date of submission</p>
                <input type="date" name="date"  />
                <i className="fas fa-calendar-day"></i>
              </div>
              <div className="item">
                <p>Name</p>
                <input type="text" name="firstName" placeholder="First" />
                <input type="text" name="lastName" placeholder="Last" />
              </div>
              <div className="item">
                <p>Email</p>
                <input type="text" name="email" />
              </div>
              <div className="btn-block">
                <button type="submit" >
                  Send
                </button>
              </div>
            </form>
          </div>


          {/* <FormDisplay data={this.state.formData}/> */}
        </div>
      </>
    );
  }
}

export default Form;
