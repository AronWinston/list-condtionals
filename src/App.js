import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  
  state = {
    userInput: ''
  }
  
  textLengthHandler = (event)=>{
    this.setState({userInput: event.target.value})
};

  removeCharHandler = (index) => {
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updateText = text.join('');
      this.setState({userInput: updateText});
  };
  
  render() {
      const charList = this.state.userInput.split('').map((ch,index) => {
        return <Char 
        character={ch}
        key={index} 
        clicked={()=>this.removeCharHandler(index)}/>;
      });
    

  return (
      <div className="App">
        
        <input type="text" 
        onChange={this.textLengthHandler} 
        value={this.state.userInput} />

        <p>
          {this.state.userInput}
        </p>

        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
