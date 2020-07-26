import React, {Component} from 'react';

class TextInput extends Component {
  constructor(){
    super();
    this.state = {
      txt: ""
    }
  }


// To read value of input field only way is event "onChange"
// Save state each time
  setValue(e){
    this.setState({
      txt: e.target.value
    })
  }

  validate(e){
    let txt = this.state.txt
    if (txt.length === 0){
      this.setState({
        txt: "Empty!"
      })
    }

    if(txt.length > 6){
      this.setState({
        txt: "Too long!"
      })
    }
  }

  render(){
    return (
      <div>
        <input id="inputText" type="text" onChange={this.setValue.bind(this)}></input>
        <button onClick={this.validate.bind(this)}>Submit</button><br />
        <span>{this.state.txt}</span>
      </div>
    )
  }
}
 export default TextInput
