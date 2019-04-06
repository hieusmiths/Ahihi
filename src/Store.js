// import { fireBaseConnect } from './fireBaseConnect';
import FormNoteAdd from './reducer/FormNoteAdd';
import Status from './reducer/Status';
import GetData from './reducer/GetData';
import Delete from './reducer/Delete';
const redux = require('redux');


const allReducerNote = redux.combineReducers({
    note : FormNoteAdd,
    status : Status,
    getDataToEdit : GetData,
    deleteById : Delete,
});

const storeForNote = redux.createStore(allReducerNote);
storeForNote.subscribe(function(){
    JSON.stringify(storeForNote.getState());
})
export default storeForNote;