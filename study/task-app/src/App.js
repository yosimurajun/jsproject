import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      
      title: {
        text: '',
        id: uniqid()
      },
      tasks: [],
      update: false,
    }

  }

  handleChange = (event) => {
    this.setState({
      title: {
        text: event.target.value,
        id: this.state.title.id,
      }
    });
  }
  handleDelete = (event) => {
    const id = event.target.parentElement.dataset.key;
    // console.log(t);
    console.log('delete');
    this.setState({
      tasks: this.state.tasks.filter((value) => value.id !== id)
    });
  }

  showUpdateForm = (event) => {
    const id = event.target.parentElement.dataset.key;
    const item = this.state.tasks.filter((value) => value.id === id);
    this.setState({
      title: { 
              text: item[0].text,
              id: item[0].id,
             },
      update: true
    });
    
    
  }
  handleUpdate = (event) => {
    event.preventDefault();
    // console.log(this.state.tasks);
    const { title, tasks }  = this.state;
    const item = tasks.filter((value) => value.id === title.id);
    item[0].text = title.text;
    this.setState({
      update: !this.state.update
    });
    
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.title),
      title: {
         text: '',
         id: uniqid()
        },
    });
    
  }

  

  render() {
    const { title, tasks, update } = this.state;
    return (
      <div>
        <h1>Task App</h1>
        <form >
          <input type="text" id="title" value={title.text} onChange={this.handleChange}/>
          { update ?
                    <input type="submit" value="modify" onClick={this.handleUpdate} /> 
                  : <input type="submit" value="add" onClick={this.handleSubmit} />}
          
        </form>
        <Overview tasks={tasks} handleDelete={this.handleDelete} handleUpdateForm={this.showUpdateForm} />
      </div>
    )
  }
}

export default App;