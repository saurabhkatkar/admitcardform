import React, { Component } from 'react';
import Search from './Components/search'
import Form from './Components/form'
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state={
			Name:['SAHIL','saurabh'],
			student:'Student',
			route:'home'
		}
	}

	onSearch = (event) => {
		var name = document.getElementById('name').value;
		var stu=String(this.state.Name.filter(sname => sname.toLowerCase()
			.includes(name.toLowerCase()))).toUpperCase();
		
		if(stu){
		this.setState({student: stu});
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
 
  render() {
  	const {student,route} = this.state;
  	const {onSearch,changeRoute}=this;
    return (
	  <div >
	  {route === 'home'
	  ?<Search onSearch={onSearch}/>
	  :<Form stud={student} changeRoute={changeRoute} /> }
                
      </div>
    );
  }
}

export default App;
