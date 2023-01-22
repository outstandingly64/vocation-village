import React, { useReducer, useContext } from "react";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SIGNUP_BEGIN,
  SIGNUP_COMPLETE,
  SIGNUP_ERROR,
} from "./actions";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../helpers/local-storage";
import reducer from "./reducer";
import axios from "axios";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  userLocation: userLocation || null,
  jobLocation: userLocation || null,
  token: token,
};

const AppContext = React.createContext();

// children = the entire app itself
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2500);
  };

  const signUpUser = async (currentUser) => {
    dispatch({ type: SIGNUP_BEGIN });

    try {
      const response = await axios.post("/api/auth/signup", currentUser);
      const { user, token, location } = response.data;
      dispatch({ type: SIGNUP_COMPLETE, payload: { user, token, location } });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR,
        payload: { message: error.response.data.message },
      });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert, signUpUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
