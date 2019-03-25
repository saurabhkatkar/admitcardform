import React from 'react';

const Search =({names,onSearch,onInput})=>{
	return(
		<div>
	 <div className ="d-flex justify-content-center mb-3 mt-5 form-inline" >
			
	        <input className="form-control mr-sm-2" type="text" placeholder="Search Name"
	         aria-label="Search" id="name" onChange={onInput}/>
	         
	        <button className="btn btn-outline-success my-2 my-sm-0" onClick={onSearch}>Search</button>
	     
		</div>
	<div id="results">
	{
		names.map((name,i) => {
			return(<div key={i}>{name}</div>);
		})
	}
	</div>
	</div>
	);
}

export default Search;