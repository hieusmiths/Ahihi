import { fireBaseConnect } from './fireBaseConnect';
import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import ListNote from './components/ListNote';
import NoteForm from './components/NoteForm';
import { connect } from 'react-redux'
import NoteFormForEdit from './components/NoteFormForEdit';
// import * as firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  addData = (item) => {
    fireBaseConnect.push(item);
  }
  // pushData = () => {
  //   const connectData = firebase.database().ref('dataForNote');
  //   connectData.push({
  //     title : "3333",
  //     noteContent: "nội dung ghi chú 3"
  //   });
  //   //hàm push thì id tự sinh ra . còn hàm set thì  phải truy cập vo chinh cái bảng đó phải nhớ ID
  // }
  // deleteData = (id) => {
  //   const connectData = firebase.database().ref('dataForNote');
  //   connectData.child(id).remove();
  // child là hàm tìm sau khi tìm xong thì làm gì.
  //   console.log("ok");
  // }
  showFormEdit = () =>{
    console.log(this.props.isEditForNote);
    if(this.props.isEditForNote){
      return <NoteFormForEdit />
    }
  }
  render() {
    // fireBaseConnect.once('value').then(
    //   function(datasnapshot) { console.log(datasnapshot.val()); }
    // );
    
    
    return (
      <div className="My-App">
        <Nav />
        <section id="list-note" className="pt-5">
          <div className="container">
              <div className="row">
              <ListNote />
              {/* <NoteForm getData = { (item) => this.addData(item)} /> */}
              <NoteForm  />
              </div>
              {
                this.showFormEdit()
              }
          </div>
        </section>









        <header className="App-header">
          
        



          

          {/* <button onClick={ this.pushData() } className="btn btn-info" >Add Push By FireBase</button>
          <button onClick={ (id) => this.deleteData('-LbOyloreYAtdPj9yDAL') } className="btn btn-info" >delte By FireBase</button> */}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
    isEditForNote: state.status.isEditForNote
  }

}

export default connect(mapStateToProps) (App);
