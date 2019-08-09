import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hi there,</p>
            <p>My name is {props.username} </p>
        </div>
    );
};

export default userOutput;