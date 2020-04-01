import axios from "axios";

export function searchList(user, searchText) {
    return function (dispatch) {
        var filteredUser = user.filter(user => {
            return user.username.toLowerCase().includes(searchText.toLowerCase())
        })
        dispatch({ type: "SEARCH_LIST", payload: filteredUser });
        console.log(filteredUser)
    }
}

