
import React from 'react';
import {Component} from 'react';
import './style.css';

class Subject extends Component {
  render () {
    return (
      <header>
        <h1>WEB1</h1>
        World Wide Web!
      </header> // 주의점! 항상 닫히는..최상위 태그가 존재해야함
    );
    }
} //요부분을 잘 봐라! 요게 컴포넌트! 

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Subject></Subject>
      </div>
    )
  }
}

export default App ;
