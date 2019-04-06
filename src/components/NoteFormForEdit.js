import React, { Component } from 'react';
import { connect } from 'react-redux';


class NoteFormForEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // noteTitle : this.props.,
            noteContent : '',
            noteTitle : '',
        }
    }
    
    componentWillMount() {
        if(this.props.dataReive){
            this.setState({
                id : this.props.dataReive.key,
                noteTitle : this.props.dataReive.noteTitle,
                noteContent : this.props.dataReive.noteContent
            })
        }
    }
    changEvent = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        console.log( value + "   ----   " + value);
        this.setState({
            [name] : value,
        })
    }
    actionForButtonUpdate = () =>{
        this.props.changeStatusEdit();
        var item = {};
        item.id = this.state.id;
        item.noteTitle = this.state.noteTitle;
        item.noteContent = this.state.noteContent;
        this.props.getItemToUpdate(item)
    }
    render() {
        return (
            <div className="col-3">
                <p className="text-muted">Add new note</p>
                <div className="form-group">
                    <form>
                    <small id="helpId" className="text-muted">title</small>
                    <input onChange={ (event) => this.changEvent(event) } defaultValue= { this.props.dataReive.noteTitle } type="text" name="noteTitle"  className="form-control" placeholder="title" aria-describedby="Description" />
                    <small id="helpId" className="text-muted">Contents</small>
                    <textarea defaultValue= { this.props.dataReive.noteContent } onChange={ (event) => this.changEvent(event) } name="noteContent" className="form-control" rows={3} placeholder="Content" />
                    <div className="text-center pt-2">
                        <input  onClick = { () => this.actionForButtonUpdate() }  className="btn btn-info" type="reset" defaultValue="Add new" />
                    </div>
                    </form>
                </div>
                </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dataReive: state.getDataToEdit.editItemOfNote
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatusEdit : () => {
            dispatch({
                type: "CHANGE_STATUS_EDIT",

            })
        },
        getItemToUpdate : (Item) =>{
            dispatch({
                type : "UPDATE_NOTE",
                Item
        })
            
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteFormForEdit)