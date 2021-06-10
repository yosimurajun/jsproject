import React, { Component } from 'react';
import General_infomation from './components/generalInfo';
import Educational_experience from './components/educational_experience';
import Practical_experience from './components/practical_experience';
import Preview from './components/preview';
import uniqid from 'uniqid';


import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      person : {
        name: '',
        job: '',
        email: '',
        phone: '',
        nation: '',
      },

      education: {
        id: uniqid(),
        name: '',
        title: '',
        date: '',
      },

      work: {
        name: '',
        title:'',
        date: ''
      },
      academy: [],

      works: []

    }

  }

  handleChange = (event) => {
    const type = event.target.className;
    
    this.setState({
      [type] : {
        ...this.state[type],
        [event.target.name] : event.target.value
      }
    });

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      academy: [...this.state.academy].concat(this.state.education)
    })
    this.handleReset();
  }

  handleReset = () => {
    this.setState({
      education: {
        name: '',
        title: '',
        date: '',
      } 
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Reasct</h1>
        <div className="forms">
          <General_infomation onChange={this.handleChange} />
          <Educational_experience onChange={this.handleChange} onSubmit={this.handleSubmit} onReset={this.state.education}/>
          <Practical_experience />
        </div>
        <div className="preview_section">
          <Preview data={this.state}/>
        </div>
      </div>
    )
  }
}

export default App;
