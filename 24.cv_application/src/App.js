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
        content: '',
      },

      education: {
        id: uniqid(),
        name: '',
        title: '',
        date: '',
      },

      work: {
        id: uniqid() + 1,
        name: '',
        position:'',
        content: '',
        date: ''
      },
      academy: [],
      works: [],
      update: {
        work: false,
        education: false
      }
    }
  }

  handleChange = (event) => {
    const type = event.target.className;
    console.log(event.target.name);
    console.log('value', event.target.value);
    this.setState({
      [type] : {
        ...this.state[type],
        [event.target.name] : event.target.value
      }
    });

  }
  updateForm = (event) => {
    const type = event.target.parentElement.parentElement.parentElement.className.split(' ');
    const id = event.target.parentElement.parentElement.dataset.key;
    let update_type = 'work';
    if(type[0] === 'academy') {
      update_type = 'education';
    }
    let selected_item = this.state[type[0]].filter((value) => value.id === id);
    this.setState({
      [update_type]: selected_item[0],
      update: {
        [update_type]: !this.state.update[update_type]
      }
    })
    
  }
  handleUpdate = (event) => {
    event.preventDefault();
    const type = event.target.parentElement.className.split(' ');
    
    console.log(type);
    const selected_item = this.state[type[0]].filter((value) => value.id === this.state[type[1]].id);
    console.log(selected_item);
    selected_item[0].name = this.state[type[1]].name;
    selected_item[0].title = this.state[type[1]].title;
    selected_item[0].position = this.state[type[1]].position;
    selected_item[0].content = this.state[type[1]].content;
    selected_item[0].date = this.state[type[1]].date;
    this.setState({
      update: {
        [type[1]]: !this.state.update[type[1]]
      }
    })
    this.handleReset();
  }
  handleDelete = (event) => {
    const type = event.target.parentElement.parentElement.parentElement.className.split(' ');
    console.log(type);
    const id = event.target.parentElement.parentElement.dataset.key;
    console.log(id);
    const renew_works = this.state[type[0]].filter((value) => value.id !== id);

    this.setState({
      [type[0]]: renew_works
    });
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const type = event.target.className;
    let setArr = 'academy';
    let item = this.state.education;
    console.log(type);

    if(type === 'work') {
      setArr = 'works';
      item = this.state.work;
    } 

    this.setState({
      [setArr]: this.state[setArr].concat(item)
    })
    this.handleReset();
  }

  handleReset = () => {
    
    this.setState({
      education: {
        id: uniqid(),
        name: '',
        title: '',
        date: '',
      },
      work: {
        id: uniqid() + 1,
        name: '',
        position:'',
        content: '',
        date: ''
      }
    })
  }

  render() {
    console.log(this.state.person.content);
    return (
      <div className="container">
        <h1 className="title">CV_APPLICATION</h1>
        <div className="forms">
          <General_infomation onChange={this.handleChange} />
          <Educational_experience onChange={this.handleChange} onSubmit={this.handleSubmit} onReset={this.state.education} onUpdateStatus={this.state.update} onUpdate={this.handleUpdate}/>
          <Practical_experience onChange={this.handleChange} onSubmit={this.handleSubmit} onReset={this.state.work} onUpdateStatus={this.state.update} onUpdate={this.handleUpdate}/>
        </div>
        <div className="preview_section">
          <Preview data={this.state} onDelete={this.handleDelete} onUpdate={this.updateForm} />
        </div>
      </div>
    )
  }
}

export default App;
