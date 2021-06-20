import React, { Component, useState, useEffect } from 'react';
import General_infomation from './components/generalInfo';
import Educational_experience from './components/educational_experience';
import Practical_experience from './components/practical_experience';
import Preview from './components/preview';
import uniqid from 'uniqid';

import './App.css';




const  App = () => {
  const [person, setPerseon] = useState({});
  const [education, setEducation] = useState({id: uniqid(), name: '', title: '', date: ''});
  const [work, setWork] = useState({id: uniqid(), name: '', position: '', content: '', date: ''});
  const [academy, setAcademy] = useState([]);
  const [works, setWorks] = useState([]);
  const [update, setUpdate] = useState({work_update: false, education_update: false});
  const [fake, setFake] = useState(false);

  const handleChange = (event) => {
    const type = event.target.parentElement.className.split(" ")[0];
    
    const {name, value}  = event.target;

    if(type === 'academy') {
      setEducation({
        ...education,
        [name]: value
      });  
    } else if(type === 'works') {
      setWork({
        ...work,
        [name]: value
      })
    } else {
      setPerseon({
        ...person,
        [name]: value
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const type = event.target.parentElement.className.split(" ")[0];

    if(type === 'academy') {
      setAcademy( state => [...state, education]);  
      setEducation({id: uniqid()});
    } else {
      setWorks(state => [...state, work]);
      setWork({id: uniqid()});
    }
    
    
    // reset();
  }
  
  const updateForm = (event) => {
    
    const type = event.target.parentElement.parentElement.parentElement.className.split(" ")[0];
    const id = event.target.parentElement.parentElement.dataset.key;

    if(type === "academy") {
      setUpdate({work_update: false, education_update: true});
      const selected_academy = academy.filter((val) => val.id === id);
      setEducation(selected_academy[0]);
    } else {
      setUpdate({education_update: false, work_update: true});
      const selected_works = works.filter((val) => val.id === id);
      setWork(selected_works[0]);
    }
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const type  = event.target.parentElement.className.split(" ")[0];
    if(type === "academy") {
      const updating_academy = academy.filter((val) => val.id === education.id)[0];
      updating_academy.name = education.name;
      updating_academy.title = education.title;
      updating_academy.date = education.date;
      setEducation({id: uniqid()});
      
    } else {
      const updating_works = works.filter((val) => val.id === work.id)[0];
      updating_works.name = work.name;
      updating_works.position = work.position;
      updating_works.content = work.content;
      updating_works.date = work.date;
      setEducation({id: uniqid()});
    }
    setUpdate(false);
  }

  const handleDelete = (event) => {
    const type = event.target.parentElement.parentElement.parentElement.className.split(" ")[0];
    const id = event.target.parentElement.parentElement.dataset.key;
    console.log(type);
    if(type === "academy") {
      const deleted_academy = academy.filter((val) => val.id !== id);
      setAcademy(deleted_academy);
    } else {
      const deleted_works = works.filter((val) => val.id !== id);
      setWorks(deleted_works);
    }
  }

  const fake_data = () => {
    setFake(!fake);
    if(fake) {
      setPerseon({
        name: 'Harry potter',
        phone: '000-1111-2222',
        email: 'hogwart@gmail.com',
        nation: 'london, BR',
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
        
      });
  
      setWorks([{
        name: 'google', position: 'webdeveloper', content: 'frontend', date: '2018-02-02'
      }]);
  
      setAcademy([
      {
        name: 'harvard', title: 'computer science', date: '2014-02-12'
      },
      {
        name: 'programing bootcamp', title: 'frontend class', date: '2012-01-01'
      },
      {
        name: 'CS seminar', title: 'computer science', date: '2010-05-12'
      }
    ]);
    } else {
      setPerseon({});
      setAcademy([]);
      setWorks([]);
    }

  }

  let props = {
    person: person,
    academy: academy,
    works: works,
  }
  return (
    <div className="container">
      <h1 className="title">CV_APPLICATION</h1>
      <div className="forms">
        <General_infomation onChange={handleChange} />
        <Educational_experience onChange={handleChange} onSubmit={handleSubmit} onReset={education} onUpdateStatus={update} onUpdate={handleUpdate} />
        <Practical_experience onChange={handleChange} onSubmit={handleSubmit} onReset={work} onUpdateStatus={update} onUpdate={handleUpdate} />
      </div>
      <div className="preview_section">
        <Preview {...props} onDelete={handleDelete} onUpdate={updateForm}  onFake={fake_data}/>
      </div>
    </div>
  )
}

// class App_class extends Component {
//   constructor(){
//     super();

//     this.state = {
//       person : {
//         name: '',
//         job: '',
//         email: '',
//         phone: '',
//         nation: '',
//         content: '',
//       },

//       education: {
//         id: uniqid(),
//         name: '',
//         title: '',
//         date: '',
//       },

//       work: {
//         id: uniqid() + 1,
//         name: '',
//         position:'',
//         content: '',
//         date: ''
//       },
//       academy: [],
//       works: [],
//       update: {
//         work: false,
//         education: false
//       }
//     }
//   }



//   }
//   updateForm = (event) => {
//     const type = event.target.parentElement.parentElement.parentElement.className.split(' ');
//     const id = event.target.parentElement.parentElement.dataset.key;
//     let update_type = 'work';
//     if(type[0] === 'academy') {
//       update_type = 'education';
//     }
//     let selected_item = this.state[type[0]].filter((value) => value.id === id);
//     this.setState({
//       [update_type]: selected_item[0],
//       update: {
//         [update_type]: !this.state.update[update_type]
//       }
//     })

//   }
//   handleUpdate = (event) => {
//     event.preventDefault();
//     const type = event.target.parentElement.className.split(' ');

//     console.log(type);
//     const selected_item = this.state[type[0]].filter((value) => value.id === this.state[type[1]].id);
//     console.log(selected_item);
//     selected_item[0].name = this.state[type[1]].name;
//     selected_item[0].title = this.state[type[1]].title;
//     selected_item[0].position = this.state[type[1]].position;
//     selected_item[0].content = this.state[type[1]].content;
//     selected_item[0].date = this.state[type[1]].date;
//     this.setState({
//       update: {
//         [type[1]]: !this.state.update[type[1]]
//       }
//     })
//     this.handleReset();
//   }
//   handleDelete = (event) => {
//     const type = event.target.parentElement.parentElement.parentElement.className.split(' ');
//     console.log(type);
//     const id = event.target.parentElement.parentElement.dataset.key;
//     console.log(id);
//     const renew_works = this.state[type[0]].filter((value) => value.id !== id);

//     this.setState({
//       [type[0]]: renew_works
//     });

//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const type = event.target.className;
//     let setArr = 'academy';
//     let item = this.state.education;
//     console.log(type);

//     if(type === 'work') {
//       setArr = 'works';
//       item = this.state.work;
//     } 

//     this.setState({
//       [setArr]: this.state[setArr].concat(item)
//     })
//     this.handleReset();
//   }

//   handleReset = () => {

//     this.setState({
//       education: {
//         id: uniqid(),
//         name: '',
//         title: '',
//         date: '',
//       },
//       work: {
//         id: uniqid() + 1,
//         name: '',
//         position:'',
//         content: '',
//         date: ''
//       }
//     })
//   }

//   render() {
//     console.log(this.state.person.content);
//     return (
//       <div className="container">
//         <h1 className="title">CV_APPLICATION</h1>
//         <div className="forms">
//           <General_infomation onChange={this.handleChange} />
//           <Educational_experience onChange={this.handleChange} onSubmit={this.handleSubmit} onReset={this.state.education} onUpdateStatus={this.state.update} onUpdate={this.handleUpdate}/>
//           <Practical_experience onChange={this.handleChange} onSubmit={this.handleSubmit} onReset={this.state.work} onUpdateStatus={this.state.update} onUpdate={this.handleUpdate}/>
//         </div>
//         <div className="preview_section">
//           <Preview data={this.state} onDelete={this.handleDelete} onUpdate={this.updateForm} />
//         </div>
//       </div>
//     )
//   }
// }

export default App;
