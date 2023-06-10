import { TOGGLE_SIDEBAR } from "../../actions";
const initState = {
  open: true,
};
const Authentication = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        open: !state.open,
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
