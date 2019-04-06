import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle : '',
            noteContent : '',
        };
    }
    
    changEvent = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        console.log( value + "   ----   " + value);
        this.setState({
            [name] : value,
        })
    }
    // this.state.title , this.state.content 
    addNote2 = (title, content ) =>{
        var item = { };
        item.noteTitle = title;
        item.noteContent = content;
        console.log(item);
        // item = JSON.stringify(item);
        // this.props.getData(item); React Thuần.
        this.props.addNote(item);
        this.setState({
            noteTitle : '',
            noteContent : '',
        })
    }
    render() {
        return (
            <div className="col-3">
                <p className="text-muted">Add new note</p>
                <div className="form-group">
                    <form>
                    <small id="helpId" className="text-muted">title</small>
                    <input onChange={ (event) => this.changEvent(event) } type="text" name="noteTitle"  className="form-control" placeholder="title" aria-describedby="Description" />
                    <small id="helpId" className="text-muted">Contents</small>
                    <textarea onChange={ (event) => this.changEvent(event) } name="noteContent" className="form-control" rows={3} placeholder="Content" />
                    <div className="text-center pt-2">
                        <input onClick = { () => this.addNote2(this.state.noteTitle , this.state.noteContent ) } className="btn btn-info" type="reset" defaultValue="Add new" />
                    </div>
                    </form>
                </div>
                </div>

        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNote: (newItem) => {
            dispatch({type:"ADD_NOTE" , newItem}) // cái tham số truyền vào phải giống với action.name bên reducer.
        }
    }
}

export default connect(null, mapDispatchToProps) (NoteForm) ;