const countrySample = {
    "123456": {
        countryId: "123456",
        countryName: "Mexico",
        countryLang: "Spanish",
        countryCurrency: "Peso",
        countryWarnings: "Don't drink the local tap water"
    },
    "789101": {
        countryName: "United Kingdom",
        countryLang: "English",
        countryCurrency: "Pound",
        countryWarnings: "Don't drink the local whiskey"

    }
};

/*const country is getting action.type from constants
we provide the state from state = countrySample, before any
action occurs. If we have data from the backend, the 
default will return an empty object
*/
const country = (state = countrySample, action) => {
    switch (action.type) {
        case "RETURN_ALL_COUNTRIES":
        return Object.assign({}, state);
        default:
        return state;
    }
}
export default country;