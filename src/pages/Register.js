import { useState, useEffect } from "react";
import { Logo, FormInput } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegistered: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Log In</h3>
        <FormInput
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
