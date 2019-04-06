import React, { Component } from 'react';
import { connect } from "react-redux";
class NoteItem extends Component {

    actionOfEditButton = ()=>{
var thisValueEdit = this.props.valueOfNote;
        
        this.props.changeStatusEdit();
        this.props.getDataItemForEdit(thisValueEdit);
    }

    actionOfDeleteButton = ()=>{
    var thisValueEdit = this.props.valueOfNote;
        var GetId = thisValueEdit.key;
        this.props.deleteNoteById(GetId);
        console.log(GetId);
    }

    render() {
        return (
            <div id="accordion">
                    <div className="card">
                    <div className="card-header" id="headingThree">
                        <span className="mb-0">
                        <button  className="btn btn-link collapsed" data-toggle="collapse" data-target={"#collapse" + this.props.index } aria-expanded="false" aria-controls="collapseThree">
                            { this.props.noteTitle }
                        </button>
                        </span>
                        <div className="btn-group float-lg-right">
                        <button onClick= { () => this.actionOfEditButton() } className="btn btn-info ">Edit</button>
                        <button onClick= { () => this.actionOfDeleteButton() } className="btn btn-warning">Delete</button>
                        </div>
                    </div>
                    <div id={"collapse" + this.props.index } className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                        { this.props.noteContent }
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDataItemForEdit: (Item) => {
            dispatch({
                type:"GET_DATA_NOTE_TO_UPDATE",
                Item
            })
        },
        deleteNoteById : (GetId) =>{
            dispatch({
                type: "DELETE_NOTE_BY_ID",
                GetId
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(NoteItem)