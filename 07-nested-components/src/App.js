// Nested Components get render.
// Component inside component.

import React, {Component} from 'react';

class App extends Component {
  render() {
      return <ButtonComp><PlaceHolder />Press Here!</ButtonComp>
  }
}

// Child component renders string "Press Here!" by {properties.children}
const ButtonComp = (properties) => <button>{properties.children}</button>
// Component inside component
const PlaceHolder = () => <span>Please </span>

export default App
