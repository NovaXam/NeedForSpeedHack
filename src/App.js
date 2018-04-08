import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import firebase from 'firebase';

import taskList from './Storage/taskList';
// import listPatients from './Storage/patients'
import Tasks from "./components/Tasks";


import './App.css';

var config = {
  apiKey: "AIzaSyC3fr5EKGDlhdv_b7-eTqPyILr4SfyxLx0",
  authDomain: "happy-feet-200513.firebaseio.com",
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
      roughData: 1
    };
  };

  componentWillMount() {
    var starCountRef = firebase.database().ref('data/');
    console.log(starCountRef);
      starCountRef.on('value', (snapshot) => {
        console.log(snapshot);
        this.setState({
            roughData: this.state.roughData + 1
        });
    })
    this.setState({
      listTask: taskList
    })
  };

  render() {
    console.log(this.state.roughData);
    return (
      <div className="container">
        <div className="row no-gutters">
            <Tasks 
              taskList={this.state.listTask}
            />
        </div>
      </div>
    );
  }
}

export default App;
