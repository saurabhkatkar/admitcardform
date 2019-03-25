import React, { Component } from 'react';
import Search from './Components/search'
import Form from './Components/form'
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state={
			Name:['sahil','saurabh'],
			student:'Student',
			route:'home',
			search:''
		}
	}

	onSearch = (event) => {
		var name = document.getElementById('name').value;
		var stu=String(this.state.Name.filter(sname => sname.toLowerCase()
			.includes(name.toLowerCase()))).toUpperCase();
		
		if(stu){
		this.setState({student: stu}); //Student's Name
		this.changeRoute();
		}else{
			console.log("Wrong Student");
		}
	}
	changeRoute=()=>{
		const {route}= this.state;
		if(route === 'home'){
			this.setState({route : 'index'});
		}else{
			this.setState({route : 'home'});
		}
	}
	onInput=(event)=>{
		var name = event.target.value;
		this.setState({search : name})
		console.log(this.state.search);		
	}
 
  render() {
  	const {student,route,Name,search} = this.state;
  	const {onSearch,changeRoute,onInput}=this;
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
	  ?<Search names={filternames} onSearch={onSearch} onInput={onInput}/>
	  :<Form stud={student} changeRoute={changeRoute} /> }
                
      </div>
    );
  }
}

export default App;
