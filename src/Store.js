// import { fireBaseConnect } from './fireBaseConnect';
import FormNoteAdd from './reducer/FormNoteAdd';
import Status from './reducer/Status';
import GetData from './reducer/GetData';
const redux = require('redux');


const allReducerNote = redux.combineReducers({
    note : FormNoteAdd,
    status : Status,
    getDataToEdit : GetData,
});

const storeForNote = redux.createStore(allReducerNote);
storeForNote.subscribe(function(){
    JSON.stringify(storeForNote.getState());
})
export default storeForNote;