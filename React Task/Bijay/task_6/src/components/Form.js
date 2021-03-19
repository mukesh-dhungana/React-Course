import React from "react";
import { useState } from "react";

const Form = ({onSubmit}) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const submitForm = (e) => {
        e.preventDefault();

        if(!firstName) {
            alert('Please Fill up the Form')
            return
        }

        onSubmit({firstName, lastName, email})

        setFirstName('')
        setLastName('')
        setEmail('')

    }

  return (
    <>
      <div className="form-wrap">
        <div className="testbox">
          <form action="" onSubmit={submitForm}>
            <h1>Complaint Form</h1>
            <p>Please fill in the form</p>
            <hr />
            
            <div className="item">
              <p>Name</p>
              <input type="text" name="firstName" placeholder="First" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <input type="text" name="lastName" placeholder="Last" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="item">
              <p>Email</p>
              <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="btn-block">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>

        {/* <FormDisplay data={this.state.formData}/> */}
      </div>
    </>
  );
};

export default Form;
