import { fireBaseConnect } from './../fireBaseConnect'; // tham chiếu tới tham số .

const noteInitialState = [];
const FormNoteAdd = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
        fireBaseConnect.push(action.newItem)
        console.log(JSON.stringify(action.newItem) +" da nhan");
            return state
        default:
        return state
    }
}
export default FormNoteAdd;