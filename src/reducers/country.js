//returns a new countriesList object using Object.assign
const country = (state = {}, action) => {
    switch (action.type) {
        case "RETURN_ALL_COUNTRIES":
        return Object.assign({}, state);
        case "COUNTRIES_LIST_ADD":
        let countriesList = action.payload.response;
        return Object.assign({}, countriesList);
        default:
        return state;
    }
}
export default country;