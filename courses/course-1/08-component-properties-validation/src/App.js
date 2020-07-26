// Validate properties of component.

import React, {Component} from 'react';
import TextInput from './TextInput';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello World!</h1>
        <PlaceHolder />
        <TextInput />
      </div>
    )
  }
}

const PlaceHolder = (props) => <h4>Text: {props.txt}</h4>

PlaceHolder.propTypes = {
  txt(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length === 0) {
      return new Error(`No text entered`)
    }
  }
}

export default App
