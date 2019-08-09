import React, { Component } from 'react';
import { EventEmitter } from 'events';

class UserInput extends Component {
    render() {
        const style = {
            textAlign: 'center',
            border: '2px solid #eee',
            padding: '10px'
        };
        return (
            <div style={style}>
                <input 
                    onChange={this.props.changeTriggered} 
                    value={this.props.startingUsername} 
                />
            </div>
        );
    }
}

export default UserInput;