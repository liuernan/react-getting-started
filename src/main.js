{  // demo with native JavaScript
  const $textarea = document.querySelector('#textarea');
  const $addBtn = document.querySelector('#add');
  const $minusBtn = document.querySelector('#minus');

  let number = 0;

  $textarea.innerText = "" + number;

  $addBtn.addEventListener('click', () => {
    number += 1;
    $textarea.innerText = "" + number;
  });

  $minusBtn.addEventListener('click', () => {
    number -= 1;
    $textarea.innerText = "" + number;
  });
}

{ // demo with React
  const $div = React.createElement('div', {}, 
    React.createElement('span', {}),
    React.createElement('button', {}),
    React.createElement('button', {})
  )
  ReactDOM.render($div, document.querySelector('#root'));
}

{ // demo with React, debug at https://codesandbox.io/s/react-beginning-95zgr?file=/src/index.js:0-816
  import { StrictMode } from "react";
  import React from "react";
  import ReactDOM from "react-dom";
  import "./styles.css";
  
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        number: 0
      };
    }
    addBtnClicked() {
      this.setState({
        number: this.state.number + 1
      });
    }
    minusBtnClicked() {
      this.setState({
        number: this.state.number - 1
      });
    }
    render() {
      return (
        <StrictMode>
          <div className="main-content">
            <span className="textarea">我为长者加一秒{this.state.number}</span>
            <button onClick={this.addBtnClicked.bind(this)}>+1s</button>
            <button onClick={() => this.minusBtnClicked()}>-1s</button>
          </div>
        </StrictMode>
      );
    }
  }
  
  ReactDOM.render(<App />, document.querySelector("#root"));
  

}