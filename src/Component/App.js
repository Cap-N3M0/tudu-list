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
      lastCounter: 1,
      searchText : ""
    };

    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
    //AddTask.js
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    //SearchTask.js
    this.handleSearch = this.handleSearch.bind(this);


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
    let tempTaskList =  this.state.taskList;

    task["taskId"] = this.state.lastCounter;

    tempTaskList.push(task);

    this.setState({
      taskList: tempTaskList,
      lastCounter: this.state.lastCounter + 1,
      searchText: ""
    });

    this.updateLocalStorage(tempTaskList);
  }

  deleteTask(task){
    let tempTaskList = this.state.taskList;

    let filteredTempTaskList = tempTaskList.filter((tempTask)=>{
      return tempTask.taskId !== task.taskId; 
    })

    this.setState({
      taskList : filteredTempTaskList
    });

    this.updateLocalStorage(filteredTempTaskList);

  }

  handleSearch(searchText){

    this.setState({
      searchText : searchText
    })
  }
  
  componentDidMount() {

    let tempCounter = this.state.lastCounter;
    
    localStorage.getItem("taskStorage") === null || localStorage.getItem("taskStorage") === 'null'
    ? localStorage.setItem("taskStorage",null)
    : JSON.parse(localStorage.getItem("taskStorage"));

    let tempTaskList = this.getFromLocalStorage();

    if(tempTaskList!=null){
      tempTaskList.map((tempTask)=> {
      tempTask.taskId = tempCounter;
      tempCounter+=1;
      return 0;
      });  
      
    }
    

    this.setState({
      taskList: tempTaskList,
      lastCounter: tempCounter
    });

  }
  // componentDidMount() {

  //   let tempTaskList = localStorage.getItem("taskStorage") === null || localStorage.getItem("taskStorage") === 'null'
  //   ? localStorage.setItem("taskStorage",null)
  //   : JSON.parse(localStorage.getItem("taskStorage"));

  //   this.setState({
  //     taskList: tempTaskList
  //   });

  // }



  render() {
    let searchText = this.state.searchText;
    let taskList = (this.state.taskList);
    let filteredTaskList = taskList.filter((task)=>{
      if(task.taskHeading.includes(searchText) || task.taskNotes.includes(searchText) || task.taskDate.includes(searchText))
      return task;
      return null;
    })


    return (
      <>
      <div className="mx-5">
      {/* <AddTask /> */}
        <AddTask 
          addTask={this.addTask} 
          toggleForm = {this.toggleForm} 
          displayForm = {this.state.displayForm}/>
        {/* <SearchTask /> */}
        <SearchTask 
          searchText = {searchText}
          handleSearch = {this.handleSearch}/>

        {/* <ListTask /> */}
        <ListTask taskList={filteredTaskList}
          deleteTask = {this.deleteTask} />
          </div>
      </>
    );
  }
}

export default App;
