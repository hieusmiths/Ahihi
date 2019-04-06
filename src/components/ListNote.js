import React, { Component } from 'react';

// connect with your database
import { fireBaseConnect } from './../fireBaseConnect';
import NoteItem from './NoteItem';
import {connect} from 'react-redux';


// get data.

class ListNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notesData : []
        }
    }
    
    
    componentWillMount() { // chạy luôn vo render là có data
        fireBaseConnect.on("value", (notes) =>{
            // data trả về là Object do vậy cần Convert it to Array process.
            var notesArray = [] // không sử dụng ngoài on được nên phải setState để Using. 
            notes.forEach( Element =>{
                const key = Element.key; // id tự sinh
                const noteTitle = Element.val().noteTitle;
                const noteContent = Element.val().noteContent;
                notesArray.push({
                    key : key,
                    noteTitle : noteTitle,
                    noteContent : noteContent
                }); // đẩy object vào Array.
                this.setState({
                    notesData : notesArray,
                })
            }) 
        })
        // Dùng hàm Once thì hay bị lỗi về promise.
    }
    

    getData = ()=>{
        var notesData = this.state.notesData;
        if(notesData){
            return (
                    notesData.map((value, key ) =>(

                        <NoteItem
                        
                        key = { key } // không cho truyển nên định nghĩa cái khác :) 
                        index = { key }
                        valueOfNote = { value }
                        noteTitle = { value.noteTitle }
                        noteContent = { value.noteContent }
                        changeStatusEdit = { ()  => this.props.changeStatusEdit()}
                        >
                        </NoteItem>
                        
                    ))
                )
        }
    }
    

    // print it can use forEach or Map.

    render() {
        return (
            <div className="col-9">
            
                
                { this.getData() }

            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatusEdit : () => {
            dispatch({
                type: "CHANGE_STATUS_EDIT",

            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNote)

