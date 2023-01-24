import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  AUTH_BEGIN,
  AUTH_COMPLETE,
  AUTH_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
} from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "All values must be specified!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === AUTH_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === AUTH_COMPLETE) {
    const { token, user, location, alertText } = action.payload;
    return {
      ...state,
      isLoading: false,
      token: token,
      user: user,
      userLocation: location,
      jobLocation: location,
      showAlert: true,
      alertType: "success",
      alertText: `${alertText}! Redirecting to dashboard...`,
    };
  }
  if (action.type === AUTH_ERROR) {
    const { message } = action.payload;
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: message,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      jobLocation: "",
      userLocation: "",
    };
  }
  throw new Error(`404 action: ${action.type}`);
};

// used in appContext.js
export default reducer;
