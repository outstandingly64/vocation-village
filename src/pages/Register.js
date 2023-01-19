import { useState, useEffect } from "react";
import { Logo, FormInput, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
//TODO: showAlert will depend on future Context values

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegistered: false,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { name, email, password, isRegistered, showAlert } = values;

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const toggleIsRegistered = () => {
    setValues({ ...values, isRegistered: !isRegistered });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{isRegistered ? "Log In" : "Sign Up"}</h3>
        {showAlert && <Alert />}
        {!isRegistered && (
          <FormInput
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />
        )}
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {isRegistered ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            onClick={toggleIsRegistered}
            className="member-btn"
          >
            {isRegistered ? "Sign Up" : "Log In"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
