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
				name:"",
				pnum:"",
				email:"",
				course:"",
				stream:"",
				college:"",
				board:"",
				cyear:"",
				cstream:"",
				hsccol:"",
				hboard:"",
				colyear:"",
				per:"",
				school:"",
				sboard:"",
				syear:"",
				sper:"",
				os:"",
				exper:"",
				lan:"",
				proenv:"",
				tit:"",
				dob:"",
				lank:"",
				nat:"",
				rel:"",
				ms:"",
				add:"",
				pla:"",
				date:""
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
		var cyear = document.getElementById('cyear').value;
		var cper = document.getElementById('cper').value;
		var cstream = document.getElementById('cstream').value;
		var hsccol= document.getElementById('hsccol').value;
		var hboard = document.getElementById('hboard').value.toUpperCase();
		var colyear = document.getElementById('colyear').value;
		var per = document.getElementById('per').value;
		var school = document.getElementById('school').value;
		var sboard = document.getElementById('sboard').value.toUpperCase();
		var syear = document.getElementById('syear').value;
		var sper = document.getElementById('sper').value;
		var os= document.getElementById('os').value;
		var exper= document.getElementById('exper').value;
		var lan= document.getElementById('lan').value;
		var proenv= document.getElementById('proenv').value;
		var tit= document.getElementById('tit').value;
		var dob= document.getElementById('dob').value;
		var lank= document.getElementById('lank').value;
		var nat= document.getElementById('nat').value;
		var rel= document.getElementById('rel').value;
		var ms= document.getElementById('ms').value;
		var add= document.getElementById('add').value;
		var pla= document.getElementById('pla').value;
		var date= document.getElementById('date').value;
		
		this.setState({details:
			{
				name:name,
				pnum:pnum,
				email:email,
				course:course,
				stream:stream,
				college:college,
				board:board,
				cyear:cyear,
				cper:cper, 
				cstream:cstream,
				hsccol:hsccol,
				hboard:hboard,
				colyear:colyear,
				per:per,
				school:school,
				sboard:sboard,
				syear:syear,
				sper:sper,
				os:os,
				exper:exper,
				lan:lan,
				proenv:proenv,
				tit:tit,
				dob:dob,
				lank:lank,
				nat:nat,
				rel:rel,
				ms:ms,
				add:add,
				pla:pla,
				date:date
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
