import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  PASSWORD_RESET_SUCCESS,
} from "../../actions";
const initState = {
  auth: false,
  user: null,
  token: null,
};
const Authentication = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        auth: false,
        user: null,
        token: null,
      };
    }
    case PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default Authentication;
