import { useState, useEffect } from "react";
import { Logo, FormInput, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import {useNavigate} from 'react-router-dom';

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegistered: false,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { name, email, password, isRegistered } = values;
  const { user, isLoading, showAlert, displayAlert, signUpUser } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!email || !password || (!isRegistered && !name)){
      displayAlert();
      return;
    }

    const currentUser = {name, email, password};
    if(isRegistered){
      console.log('already member');
    }else{
      signUpUser(currentUser);
    }
  };

  const toggleIsRegistered = () => {
    setValues({ ...values, isRegistered: !isRegistered });
  };

  useEffect(() => {
    if(user){
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

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
        <button type="submit" className="btn btn-block" disabled={isLoading}>
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
