export default function reducer(state = {
    searchList: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
        case "SEARCH_LIST": {
            return { ...state, fetching: true, searchList: action.payload }
        }
    }

    return state
}
