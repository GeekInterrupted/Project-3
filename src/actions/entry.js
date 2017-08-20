export default {
    entriesList: (response) => {
      return {
        type: 'ENTRIES_LIST_ADD',
        payload: { response: response }
      }
    },
    pushNewEntry: (response) => {
      return {
        type: 'PUSH_NEW_ENTRY',
        payload: { response: response }
      }
    },
    editEntry: (response) => {
      return {
        type: 'EDIT_ENTRY',
        payload: { response: response }
      }
    },
    deleteEntry: (response) => {
      return {
        type: 'DELETE_ENTRY',
        payload: { response: response }
      }
    }
  }