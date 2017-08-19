//returns a new entriesList object using Object.assign
const entry = (state = {}, action) => {
    switch (action.type) {
        case "RETURN_ALL_ENTRIES":
        return Object.assign({}, state);
        case "ENTRIES_LIST_ADD":
        let entriesList = action.payload.response;
        return Object.assign({}, entriesList);
        default:
        return state;
    }
}
export default entry;