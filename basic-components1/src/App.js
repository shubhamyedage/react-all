import React from 'react';

// Class Component can have a state
class App extends React.Component {
  render(){
    // return <h1>Hello World!</h1>

    // return React.createElement('h1', null, 'Welcome!')

//class is keyword from react so use className instead class
    return <h1 className="altern">Hii there!</h1>
  }
}


// Stateless function
// const App = () => return <h1>Hello world</h1>
export default App
