// Properties are collection of value provided to component
// Cannot be modified by component

import React from 'react';

class App extends React.Component {
  render(){
    // First way
    // return <h1>{this.props.txt}</h1>

    // Second way
    let txt = this.props.txt
    let no = this.props.no
    return (
      <div>
        <h1>{txt}</h1>
        <b>{no}</b>
      </div>
    )
  }
}

// Declare properties with expected type. State required or not.
App.propType = {
  txt: React.PropTypes.string,
  no: React.PropTypes.number.isRequired
}
// set default values
// App.defaultProps = {
//   txt: "Hii there...",
//  no: 10
// }
export default App
