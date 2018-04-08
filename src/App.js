import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import firebase from 'firebase';

import taskList from './Storage/taskList';
// import listPatients from './Storage/patients'
import Tasks from "./components/Tasks";
import Modal from './components/Modal';

import './App.css';

var config = {
  apiKey: "AIzaSyC3fr5EKGDlhdv_b7-eTqPyILr4SfyxLx0",
  authDomain: "happy-feet-200513.firebaseapp.com",
  databaseURL: "https://happy-feet-200513.firebaseio.com/",
  project_id: "happy-feet-200513",
  private_key_id: "6ca42621ed39c33f43e63a676da7c084604756ee",
  client_id: "111576067471810061890"
};

firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTask: { 
        namePatient: null,
        room: null,
        floor: null,
        reason: null
      },
      patients: [],
      roughData: {},
      modal: {
        class: "modal fade",
        display: "block" 
      }
    }
    this.handleCloser = this.handleCloser.bind(this);
  };

  componentWillMount() {
    var starCountRef = firebase.database().ref('/');
    setTimeout(() => {
      let newModal = {class: "modal fade show", display: "block" }
      this.setState({
        modal: {...newModal} 
        })
    }, 2000);  
    starCountRef.on('value', (snapshot) => {
        let arr = Object.values(snapshot.val());
        this.setState({
            roughData: {...arr[arr.length - 1]}
        });
    })
    this.setState({
      listTask: taskList
    })
  };

  handleCloser() {
    let newModal = {class: "modal fade", display: "none" }
      this.setState({
        modal: {...newModal},
        roughData: {}
        })
  }

  render() {
    console.log(this.state.roughData);
    if (Object.values(this.state.roughData).length > 0) {
      document.querySelector(".vsc-initialized").setAttribute("class", "vsc-initialized fade show");
      return (
        <div className="row no-gutters">
          <Modal 
            message={this.state.roughData}
            modal={this.state.modal}
            handleCloser={this.handleCloser}
            />
          <Tasks 
            taskList={this.state.listTask}
            />
          <div className="modal-backdrop fade show"></div>
      </div>
      )
    } else {
      return (
        <div className="container">
          <div className="row no-gutters">
              <Tasks 
                taskList={this.state.listTask}
              />
          </div>
        </div>
      );
    };
  };
}

export default App;
