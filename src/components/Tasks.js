import React, { Component } from 'react';
import Task from './Task';

import '../Style/tasks.css';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorSchema: ["#D8E0E0", "#969C9B"]
        };

    };

    render() { 
        console.log(this.props);
        return (  
            <div className="col col-sm-12 tasks">
                <div className="row no-gutters align-items-center">
                    <div className="col col-sm-12 headerTask" style={{background: "#D8E0E0"}}>
                        <div className="row no-gutters">
                            <div className="col col-sm-12"> </div>
                        </div>
                        <div className="row no-gutters align-items-center taskLineHeader" style={{background: "#969C9B"}}>
                            <h3 className="col col-sm-12">TASKS</h3>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col col-sm-12 listOfTask">
                        {
                            this.props.taskList.taskList.map((elem, i) => {
                                if (i % 2 == 0) { 
                                    return (
                                        <Task 
                                            data={elem}
                                            key={i * Math.random()}
                                            color={this.state.colorSchema[0]}
                                        />
                                    );
                                } else {
                                    return (
                                        <Task 
                                            data={elem}
                                            key={i * Math.random()}
                                            color={this.state.colorSchema[1]}
                                        />
                                    );
                                }
                            })
                        }
                    </div>
                </div>
                <div className="row no-gutters">
                    <button id="taskLog"className="btn btn-secondary col col-sm-6" type="button" >Patient Log </button>
                    <button id="taskLog"className="btn btn-secondary col col-sm-6" type="button" > Task </button>
                </div>
            </div>
        );
    }
}

export default Tasks;
