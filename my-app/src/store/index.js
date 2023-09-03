import { createStore,combineReducers } from "redux";
import { postReducer } from "./reducers/postReducer";
import { comentsReducer } from "./reducers/comentsReducer";

const rootReducers = combineReducers({
    posts: postReducer,
    coments: comentsReducer
})
export const store = createStore(rootReducers)