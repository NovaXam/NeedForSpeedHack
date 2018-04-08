import React from 'react';

const Modal = (props) => {
    console.log(props);
    return (
        <div className={props.modal.class} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: props.modal.display}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Alert</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <h5 className="modal-title" id="exampleModalLabel">{props.message.AlertLevel}</h5>
                    <h5 className="modal-title" id="exampleModalLabel">{props.message.Floor}</h5>
                    <h5 className="modal-title" id="exampleModalLabel">{props.message.Name}</h5>
                    <h3 className="modal-title" id="exampleModalLabel">{props.message.Room}</h3>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.handleCloser}>Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;