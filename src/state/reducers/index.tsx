import { combineReducers } from "redux";
import langReducer from "./LangReducer";
import formReducer from "./FormReducer";

const reducers = combineReducers({
    language: langReducer,
    form: formReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>