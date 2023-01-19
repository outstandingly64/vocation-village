import { DISPLAY_ALERT } from "./actions";

const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'All values must be specified!'
        };
    }
  throw new Error(`404 action: ${action.type}`);
};

// used in appContext.js
export default reducer;
