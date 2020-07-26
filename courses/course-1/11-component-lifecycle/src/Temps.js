import React, {Component} from 'react';
import Counter from 'react-countdown-clock';

// Component
class Temps extends Component{
  constructor(){
    super();
    this.showMessage = this.showMessage.bind(this)
  }

  showMessage(){
    console.log('Halt!')
  }

  componentWillMount(){
    console.log('componentWillMount')
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  render(){
    // return (
    //   <div>
    //       <Counter seconds={240}
    //                  color="#000"
    //                  alpha={0.9}
    //                  size={300}
    //                  onComplete={this.showMessage} />
    //   </div>
    // )
    return <span>Hello</span>
  }
}

export default Temps

// Customized down counter

// class Temps extends Component {
//   constructor(){
//     super();
//     this.state = {
//       minutes: 3,
//       seconds: 59,
//       date: (new Date()).toLocaleTimeString()
//     }
//     this.startTimer = this.startTimer.bind(this)
//   }
//
//   startTimer(){
//       this.setState({
//         seconds: this.state.seconds - 1,
//         date: (new Date()).toLocaleTimeString()
//       })
//   }
//
//   componentWillMount(){
//
//   }
//
//   render(){
//     return(
//       <div>
//         <h4>{this.state.minutes}:{this.state.seconds}</h4>
//         <h4>
//       </div>
//     )
//   }
//
//   componentDidMount(){
//     window.setInterval(this.startTimer, 1000)
//   }
// }
//
// export default Temps
