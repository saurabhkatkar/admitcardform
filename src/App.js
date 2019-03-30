import React, { Component } from 'react';
import Search from './Components/search'
import Form from './Components/form';
import ResumeForm from './Components/resumeform';
import Resume from './Components/Resume'
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state={
			Name:['sahil','saurabh'],
			student:'Student',
			route:'home',
			search:'',
			details:{
				Name:"",
				pnum:"",
				email:"",
				course:"",
				stream:"",
				college:"",
				board:""
			}
		}
	}

	onSearch = (event) => {
		var name = document.getElementById('name').value.toUpperCase();
		var stu=String(this.state.Name.filter(sname => sname.toLowerCase()
			.includes(name.toLowerCase()))).toUpperCase();
		
		if(name === stu){
		this.setState({student: stu}); //Student's Name
		this.changeRoute();
		}else{
			console.log("Wrong Student");
		}
	}
	changeRoute=()=>{
		const {route}= this.state;
		if(route === 'home'){
			this.setState({route : 'form'});
		}else{
			this.setState({route : 'home'});
		}
	}
	onInput=(event)=>{
		var name = event.target.value;
		this.setState({search : name})
		console.log(this.state.search);		
	}
	resumeForm=()=>{
		this.setState({route : 'rform'});
	}
	onSubmit=()=>{
		var name = document.getElementById('sname').value.toUpperCase();
		var pnum= document.getElementById('pnum').value.toUpperCase();
		var email = document.getElementById('email').value.toLowerCase();
		var course= document.getElementById('course').value.toUpperCase();
		var stream = document.getElementById('stream').value.toUpperCase();
		var college = document.getElementById('college').value.toUpperCase();
		var board = document.getElementById('board').value.toUpperCase();

		this.setState({details:
			{
				name:name,
				pnum:pnum,
				email:email,
				course:course,
				stream:stream,
				college:college,
				board:board
			}
		});
		this.setState({route:"resume"});

	}
 
  render() {
  	const {student,route,Name,search,details} = this.state;
  	const {onSearch,changeRoute,onInput,resumeForm,onSubmit}=this;
  	const filternames = Name.filter(
			(name=>{
					if(search){
					return name.toLowerCase().includes(search.toLowerCase());
					}
			})
		);
    return (  
	  <div >
	  
	  {route === 'home'
	  ?<div>
	  	<Search names={filternames} onSearch={onSearch} onInput={onInput}/>
	  	<span>Create Resume</span>
        <div>
        <button type="button" class="btn btn-success" onClick={resumeForm} >Click Here</button>
		</div>   
	   </div>
	  : (route === 'form'
	  ?<Form stud={student} changeRoute={changeRoute} />
	  :(route === 'rform'
	  	?<ResumeForm onSubmit={onSubmit}/> 
	  	:<Resume details={details}/>)
		)}
       
          
      </div>
    );
  }
}

export default App;
