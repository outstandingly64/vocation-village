import React, { useReducer, useContext } from "react";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  AUTH_BEGIN,
  AUTH_COMPLETE,
  AUTH_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_COMPLETE,
  UPDATE_USER_ERROR,
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

  const authenticateUser = async ({ currentUser, endpoint, alertText }) => {
    dispatch({ type: AUTH_BEGIN });

    try {
      const response = await axios.post(`/api/auth/${endpoint}`, currentUser);
      const { user, token, location } = response.data;
      dispatch({
        type: AUTH_COMPLETE,
        payload: { user, token, location, alertText },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: { message: error.response.data.message },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  /**
   * Creating an custom axios instance prevents attaching
   * auth bearer token to every request made with axios.
   */
  const authFetch = axios.create({
    baseURL: "/api",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  //Handling 401 Errors with Axios
  //Requests
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //Response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        console.log("Authentication Error!");
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const updateUser = async (currentUser) => {
    const backendUrl = "/auth/updateUser";
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch(backendUrl, currentUser);

      const { user, location, token } = data;

      dispatch({
        type: UPDATE_USER_COMPLETE,
        payload: { user, location, token },
      });
      // Must also update the user info in local storage
      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { message: error.response.data.message },
        });
      }
    }
    clearAlert();
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        authenticateUser,
        toggleSidebar,
        logoutUser,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
