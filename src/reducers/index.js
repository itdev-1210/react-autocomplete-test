import { combineReducers } from "redux"
import user from "./userReducer"
import searchList from "./searchListReducer"

export default combineReducers({
    user,
    searchList
})