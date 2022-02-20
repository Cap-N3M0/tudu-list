import React, { Component } from "react";
import "../css/App.css";

import AddTask from "./AddTask";
import SearchTask from "./SearchTask";
import ListTask from "./ListTask";


class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList : [],
      displayForm: true,
      lastCounter: 0
    };

    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleForm = this.toggleForm.bind(this);

  }

  toggleForm(){
    this.setState({
      displayForm : ! this.state.displayForm
    })
  }

  getFromLocalStorage(){
    return localStorage.getItem("taskStorage") === null ||  localStorage.getItem("taskStorage") === 'null' 
    ? [] 
    : JSON.parse(localStorage.getItem("taskStorage"));
  }

  updateLocalStorage(taskList){
    localStorage.setItem("taskStorage", JSON.stringify(taskList));
  }

  addTask(task) {
    let tempTaskList =  this.getFromLocalStorage();

    task["taskId"] = this.state.lastCounter;

    tempTaskList.push(task);

    this.setState({
      taskList: tempTaskList,
      lastCounter: this.state.lastCounter + 1,
    });

    this.updateLocalStorage(tempTaskList);
  }

  deleteTask(task){
    let tempTaskList = this.getFromLocalStorage();

    tempTaskList.pop(task.taskId);

    this.setState({
      taskList : tempTaskList
    });

    this.updateLocalStorage(tempTaskList);

  }

  componentDidMount() {

    let tempTaskList = localStorage.getItem("taskStorage") === null || localStorage.getItem("taskStorage") === 'null'
    ? localStorage.setItem("taskStorage",null)
    : JSON.parse(localStorage.getItem("taskStorage"));

    this.setState({
      taskList: tempTaskList
    });

  }



  render() {
    let taskList = (this.state.taskList);
    return (
      <>
      <div className="mx-5">
      {/* <AddTask /> */}
        <AddTask 
          addTask={this.addTask} 
          toggleForm = {this.toggleForm} 
          displayForm = {this.state.displayForm}/>
        {/* <SearchTask /> */}
        <SearchTask />

        {/* <ListTask /> */}
        <ListTask taskList={taskList}
          deleteTask = {this.deleteTask} />
          </div>
      </>
    );
  }
}

export default App;
