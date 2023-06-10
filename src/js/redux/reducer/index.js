import { combineReducers } from "redux";
import Authentication from "./Authentication";
import Contractor from "./Contractor"
import Setting from "./setting/";

const CreateReducer = () => {
  return combineReducers({
    Auth: Authentication,
    Contractor,
    Setting,
  });
};
export default CreateReducer;
