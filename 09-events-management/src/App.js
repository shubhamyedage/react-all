// Initialize events in counstructor

import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      eventName: ""
    }
    this.showEvent = this.showEvent.bind(this);
  }

  showEvent(e){
    this.setState({eventName: e.type})
  }

  render(){
    return(
      <div>
          <h1>Hello World!</h1>
          <textarea
            onKeyPress={this.showEvent}
            onDoubleClick={this.showEvent}
            onFocus={this.showEvent}
            onBlur={this.showEvent}
            onTouchStart={this.showEvent}
            onTouchMove={this.showEvent}
            onTouchEnd={this.showEvent}
            rows="10"
            cols="30"/>
            <h4>{this.state.eventName}</h4>
      </div>
    )
  }
}

export default App
