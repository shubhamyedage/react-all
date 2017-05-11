// USe of "ref" to get value of input field
// Multiple ways
// 1: <input ref="a" />  ... a: e.target.a.value
// 2: <input ref={node => this.a = node} ...

import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      a: "",
      b: "",
      c: ""
    }
    this.update = this.update.bind(this)
  }

  update(e){
      this.setState({
        a: this.refs.a.value,
        b: this.refs.b.value,
        c: this.c.value,
        d: this.d.refs.input.value
      })
  }

  render(){
    return(
      <div>
        <h1>Hello World!</h1>
          <b>First way</b><br/>
          <input ref="a" type="text" onChange={this.update}/><br/>
          <span>{this.state.a}</span><br/><br/>
          <input ref="b" type="text" onChange={this.update}/><br/>
          <span>{this.state.b}</span><br/><br/>
          <b>Second way</b><br/>
          <input ref={node => this.c = node} type="text" onChange={this.update}/><br/>
          <span>{this.state.c}</span><br/><br/>
          <b>Third way</b><br/>
          <InputField ref={component => this.d = component} update={this.update} />
          <span>{this.state.d}</span>
      </div>
    )
  }
}

class InputField extends Component {
  render(){
    return (
      <div>
        <input ref="input" type="text" onChange={this.props.update} />
      </div>
    )
  }
}

export default App
