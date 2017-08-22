//returns a new entriesList object using Object.assign
import mapHelpers from "../utils/mapHelpers";

const entry = (state = {}, action) => {
    switch (action.type) {
        case "RETURN_ALL_ENTRIES":
        return Object.assign({}, state);
        case "ENTRIES_LIST_ADD":
        let entriesList = action.payload.response;
        return Object.assign({}, entriesList);
        case 'PUSH_NEW_ENTRY':
        let newEntryObject = action.payload.response;
        return mapHelpers.addItem(state, newEntryObject['_id'], newEntryObject);
      case 'EDIT_ENTRY':
        let editedEntryObject = action.payload.response;
        return mapHelpers.addItem(state, editedEntryObject['_id'], editedEntryObject);
      case 'DELETE_ENTRY':
        let deleteEntryId = action.payload.response;
        return mapHelpers.deleteItem(state, deleteEntryId);
      
      default:
        return state;
    }
}
export default entry;