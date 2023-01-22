import { DISPLAY_ALERT, CLEAR_ALERT, SIGNUP_BEGIN, SIGNUP_COMPLETE, SIGNUP_ERROR } from "./actions";

const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'All values must be specified!'
        };
    }
    if(action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: ''
        };
    }
  throw new Error(`404 action: ${action.type}`);
};

// used in appContext.js
export default reducer;
