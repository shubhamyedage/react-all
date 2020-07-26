import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
class App extends Component {
  constructor(){
    super();
    this.state={
      showModal: false
    }
  }

  render() {
    return (
      <div>
        Hello world
        <Modal className="showModal" show={this.state.showModal} onHide={close}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          Area Assignment: An area is a distinct space or section used to start, locate or end a customer session.
          One or many beacons may be placed in an area (i.e. a patio may be considered a destination area).
          Later, when configuring each beacon, you can separately name it.
        </Modal.Body>
        </Modal>
        <button onClick={() => this.setState({showModal: true})}>Submit</button>
      </div>
    );
  }
}



export default App;
