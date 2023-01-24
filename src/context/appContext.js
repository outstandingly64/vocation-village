import React, { useReducer, useContext } from "react";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  AUTH_BEGIN,
  AUTH_COMPLETE,
  AUTH_ERROR,
  TOGGLE_SIDEBAR,
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
  showSidebar: false,
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

  const authenticateUser = async ({currentUser, endpoint, alertText}) => {
    dispatch({ type: AUTH_BEGIN });

    try {
      const response = await axios.post(`/api/auth/${endpoint}`, currentUser);
      const { user, token, location } = response.data;
      dispatch({ type: AUTH_COMPLETE, payload: { user, token, location, alertText } });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: { message: error.response.data.message },
      });
    }
    clearAlert();
  }

  const toggleSidebar = () => {
    dispatch({type: TOGGLE_SIDEBAR});
  }

  return (
    <AppContext.Provider value={{ ...state, displayAlert, authenticateUser, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
