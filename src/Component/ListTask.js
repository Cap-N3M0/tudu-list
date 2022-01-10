import { Component } from "react";

class ListTask extends Component {
  render() {
    // console.log(this.props.taskList);

    return (
      <>
        {this.props.taskList === null || this.props.taskList === undefined
          ? "NO TASK IS ADDED"
          : this.props.taskList.map((task) => {
              return (
                <div
                  className="item-container d-flex flex-column mx-5 mt-3 px-2 py-2 "
                  key={task.taskId}
                >
                  <div className="task-heading d-flex p-1">
                    <button type="button" onClick={(e) => (this.props.deleteTask(task))}> X </button>
                    {task.taskHeading}
                    <span className="offset-md-8 task-date">{task.taskDate}</span>
                  </div>
                  <div className="task-notes m-1 p-1">{task.taskNotes}</div>
                </div>
              );
            })}
      </>
    );
  }
}

export default ListTask;
