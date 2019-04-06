// import { fireBaseConnect } from './../fireBaseConnect'; // tham chiếu tới tham số .

const statusInitialState = {
    isEditForNote : false
};




const Status = (state = statusInitialState, action) => {
    switch (action.type) {
        case "CHANGE_STATUS_EDIT":
        console.log(!state.isEditForNote);
        return {...state, isEditForNote : !state.isEditForNote} 
        default:
            return state
    }
}

export default Status;