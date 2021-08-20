import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }
  }
  add1() {
    this.setState({
      number: this.state.number + 1
    })
  }
  minus1() {
    this.setState({
      number: this.state.number - 1
    })
  }
  render() {
    return (
      <div className="App">
        the number {this.state.number} will change if you click
        <button onClick={this.add1.bind(this)}>+1</button>
        <button onClick={()=>{this.minus1()}}>-1</button>
      </div>
    );
  }
}

export default App;
