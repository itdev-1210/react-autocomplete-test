export default function reducer(state = {
    user: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "USER": {
            return { ...state, fetching: true }
        }
        case "USER_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload,
            }
        }
    }

    return state
}
