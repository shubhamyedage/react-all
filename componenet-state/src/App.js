// State helps to manage and update collection of values
//  that will be passed to Component

import React, { Component } from 'react';

class App extends Component {
// To set default state
  constructor(){
    // it will help to make scope of this to App but not to componenet
    super();
    // set default state
    this.state = {
      txt: "Hello world!",
      no: 10
    }
  }
// Update state
  update (e){
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h4>{this.state.txt} : {this.state.no}</h4>
      </div>
    );
  }
}

export default App;
