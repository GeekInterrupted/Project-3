export default {
    entriesList: (response) => {
        return {
            type: "ENTRIES_LIST_ADD",
            payload: { response: response }
        }
    }
}