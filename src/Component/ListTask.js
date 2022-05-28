import { Component } from "react";
//import Draggable from "react-draggable";
import { BsFileExcel} from '../../node_modules/react-icons/bs'

class ListTask extends Component {
  render() {
    return (
      <>
        {this.props.taskList === null || this.props.taskList === undefined || this.props.taskList.length === 0
          ? <div className="my-5">
              NO TASK ADDED YET
            </div>
          : this.props.taskList.map((task) => {
              return (
                // <Draggable>
                    <div className = "card d-flex flex-column my-3 px-3" key = {task.taskId}>
                    <div className="d-flex fle-row justify-content-between align-items-center">
                      <h6 className="my-2">{task.taskHeading}</h6>
                      <BsFileExcel size = "25"
                                  onClick={(e) => (this.props.deleteTask(task))}/>
                    </div>  
                    <p>{task.taskNotes}</p>
                    <small className="d-flex align-self-end">{task.taskDate}</small>
                    </div>  
                // </Draggable>
                // <div
                //   className="item-container d-flex flex-column mx-5 mt-3 px-2 py-2 "
                //   key={task.taskId}
                // >
                //   <div className="task-heading d-flex p-1">
                //     <button type="button" onClick={(e) => (this.props.deleteTask(task))}> X </button>
                //     {task.taskHeading}
                //     <span className="offset-md-8 task-date">{task.taskDate}</span>
                //   </div>
                //   <div className="task-notes m-1 p-1">{task.taskNotes}</div>
                // </div>
              );
            })}
      </>
    );
  }
}

export default ListTask;
