import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postsreducer from './postsReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    posts: postsreducer,
    auth: authReducer,
    profile: profileReducer
})