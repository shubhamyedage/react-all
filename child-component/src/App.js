// Render child Component from parent component
import React, {Component} from 'react';

class App extends Component{
  constructor() {
    super();
    this.state = {
      txt: "Hello there...."
    }
  }

  update(e){
    this.setState({
      txt: e.target.value
    })
  }

  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <h4>{this.state.txt}</h4>
        <PlaceHolder callFun={this.update.bind(this)} />
      </div>
    )
  }
}
// Another component to render.
// callFun is property for PlaceHolder component
const PlaceHolder = (props) =>
  <input type='text' onChange={props.callFun} />

export default App
