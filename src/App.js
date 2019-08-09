import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      {username: 'Jaina Proudmoore'},
      {username: 'Thrall'},
      {username: 'Illidan Stormrage'}
    ]
  };

  usernameChangedHandler = (event) => {
    this.setState({
      users: [
        {username: event.target.value},
        {username: event.target.value},
        {username: event.target.value}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput 
          changeTriggered={this.usernameChangedHandler} 
          startingUsername={this.state.users[0].username} 
        />
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[1].username} />
        <UserOutput username={this.state.users[2].username} />
      </div>
    );
  }
}

export default App;
