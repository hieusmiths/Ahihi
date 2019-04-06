import { fireBaseConnect } from './../fireBaseConnect';


const DeleteByIdInitialState = {
        idOfNote : ''
}
const Delete = (state = DeleteByIdInitialState, action) => {
    switch (action.type) {
        case "DELETE_NOTE_BY_ID":
            fireBaseConnect.child(action.GetId).remove();
            return state
        default:
            return state
    }
}
export default Delete;