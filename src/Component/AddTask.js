import { Component } from "react";
import validateObject from './validateObject';

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      taskHeading: "",
      taskNotes: "",
      taskDate: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleAdd(e) {
    e.preventDefault();

    let tempTask = {
      taskHeading: this.state.taskHeading,
      taskNotes: this.state.taskNotes,
      taskDate: this.state.taskDate,
    };
    
    let tempTaskList = [];
    tempTaskList.push(tempTask);

    let returnObj = validateObject(tempTaskList);
    if(returnObj.isEmpty === true){
      
      let err = Error('Null value found in fields');
      console.log(err.stack);
      return false;
    }

    this.props.addTask(tempTask);

    this.setState({
      taskHeading: "",
      taskNotes: "",
      taskDate: "",
    });

    this.props.toggleForm();
  }

  render() {
    return (
      <>
        <div className="card">
          <div className={"text-align-center card-header "} onClick={this.props.toggleForm}> Add Task</div>
          <div className={"card-body " + (this.props.displayForm ? "d-none":'')}>
            <form id="taskForm" noValidate>
              <div className = "d-flex flex-column flex-sm-column flex-md-row">
                <div className="form-group col d-flex flex-row">
                  <label htmlFor="taskHeading" className = "d-flex col-3 col-sm-2">Title</label>
                  <input
                      type="text"
                      name="taskHeading"
                      className="form-control d-flex "
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.taskHeading}
                    />
                </div>
                <div className="form-group col d-flex flex-row">
                  <label htmlFor="taskDate" className="d-flex col-3 col-sm-2">Date </label>
                  <input
                      type="date"
                      name="taskDate"
                      className="form-control d-flex"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.taskDate}
                    />
                </div>
              </div>
              <div className = "form-group col d-flex flex-row">
                <label htmlFor="taskNotes" className="d-flex col-3 col-sm-2 col-md-1">Notes </label>
                  <textarea
                    className="form-control d-flex "
                    rows="5"
                    type="text"
                    name="taskNotes"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.taskNotes}
                  />
              </div>

              <div>
              <button
                    type="submit"
                    className="btn btn-primary d-block ml-auto"
                    onClick={(e) => this.handleAdd(e)}
                  >
                    Add Task
                  </button>
              </div>
              
              {/* <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="taskHeading"
                >
                  Title:
                </label>
                <div>
                  <input
                    type="text"
                    name="taskHeading"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.taskHeading}
                  />
                </div>

                <label
                  className="col-md-2 offset-md-1 col-form-label text-md-right"
                  htmlFor="taskDate"
                >
                  Date:
                </label>
                <div>
                  <input
                    type="date"
                    name="taskDate"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.taskDate}
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="taskNotes"
                >
                  Notes:
                </label>
                <div>
                  <textarea
                    className="form-control"
                    rows="4"
                    cols="72"
                    type="text"
                    name="taskNotes"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.taskNotes}
                  />
                </div>
              </div>

              <div className="form-group form-row">
               
              </div>

              <div className="form-group form-row">
                <div className="col-md-10">
                  <button
                    type="submit"
                    className="btn btn-primary d-block ml-auto"
                    onClick={(e) => this.handleAdd(e)}
                  >
                    Add Task
                  </button>
                </div>
              </div> */}

              {/* <button type="submit" name="addTask" onClick={(e)=>(this.handleAdd(e))}> Add Task</button> */}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default AddTask;
