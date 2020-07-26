import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => {
  const [ personState, setPersonsState ] = useState({
    persons: [
      {name: 'donald', age:20},
      {name: 'daffey', age:19}
    ]
  });

  const switchNameHandler = () => {
    // console.log('Clicked');
    // Don't Use: this.state.persons[0].name = 'don';
    setPersonsState({
      persons: [
        {name: 'don', age:20},
        {name: 'daffey', age:19}
      ]
    });
  }
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <button onClick={switchNameHandler}>Click me</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}>My hobbies are: singing</Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
    </div>
    // React.createElement("div", {className: "App"}, React.createElement("h1", '' ,"Hello world!"))
  );
}

export default App;
