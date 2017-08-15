export default {
    countriesList: (response) => {
        return {
            type: "COUNTRIES_LIST_ADD",
            payload: { response: response }
        }
    }
}