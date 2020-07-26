import React, {Component} from 'react';
import Temps from './Temps';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor(){
    super();
    this.state={
      no: 0
    }
    this.updateEvent = this.update.bind(this)
  }

  update(){
    this.setState({
      no: this.state.no + 1
    })
    // var bt = this.refs.btn;

    ReactDOM.render(<Temps />, document.getElementById('modal'))
  }


  render(){
    return (
      <div>
          <h1>Hello World!</h1>
          <button ref='btn' onClick={this.updateEvent}>{this.state.no}</button>
      </div>

    )
  }

  // componentDidMount(){
  //   console.log('mounted!');
  // }
}

// const TextSpace = (props) => <h3>{props.txt}</h3>

export default App
