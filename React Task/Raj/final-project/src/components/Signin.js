import React, { useState, useEffect } from "react";
import { firebaseAuth } from "./firebase/config";
import { useAuth } from "./authContext";

const Signin = () => {
  const [credint, setCredint] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = useAuth();

  const { email, password } = credint;

  const handleChange = (name, e) => {
    setCredint(prevCred => ({
      ...prevCred,
      [name]: e.target.value,
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await auth.signIn(email, password);
      setError(false);
      setCredint({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            onChange={e => handleChange("email", e)}
            value={email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            onChange={e => handleChange("password", e)}
            value={password}
          />
        </div>
        <button disabled={loading}>{loading ? "Loading" : "Loginin"}</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Signin;
