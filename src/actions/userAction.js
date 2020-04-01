import axios from "axios";

export function user() {
    return function (dispatch) {
        dispatch({ type: "USER" });
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch({ type: "USER_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "USER_REJECTED", payload: err.response })
            })
    }
}

