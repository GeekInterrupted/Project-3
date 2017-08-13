const countrySample = {
    "123456": {
        countryName: "Colombia",
        countryCapital:"Bogota",
        countryCallingCodes:["57"],
        countryLang: "Spanish",
        countryCurrency: [{
            code:"COP",
            name:"Colombian Peso",
            symbol: "$"
        }],
        countryWarnings: true,
        flag:"https://restcountries.eu/data/col.svg"
        
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