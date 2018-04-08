import React from 'react';
import '../Style/reasonBlock.css';

const Task = (props) => {
    return (  
        <div className="row no-gutters task" style={{background: props.color}}>
            <div className="col col-sm-9 descTaskBlock">
                <h5>{props.data.name}</h5>
                <div>Room{props.data.room}</div>
                <div>Floor: {props.data.floor}</div>
            </div>
            <div className="col col-sm-3 align-items-center reasonBlock">
                <div className="reasonButton"> </div>
                <div>{props.data.reason}</div>
            </div>
        </div>
    );
};
 
export default Task;