import { fireBaseConnect } from './../fireBaseConnect';

const GetDataItemInitialState = {
    editItemOfNote : {}
}
const GetDataItemForUpdate = (state = GetDataItemInitialState, action) => {
    switch (action.type) {
        case "GET_DATA_NOTE_TO_UPDATE" :
            console.log(action.Item);
            return {...state, editItemOfNote : action.Item}
        case "UPDATE_NOTE" :
            // console.log(JSON.stringify(action.Item) +" đã nhận");
            fireBaseConnect.child(action.Item.id).update({
                noteTitle : action.Item.noteTitle,
                noteContent : action.Item.noteContent
            });
            // return null;
            return {...state, editItemOfNote :{}}
        default:
            return state
    }
}

export default GetDataItemForUpdate;