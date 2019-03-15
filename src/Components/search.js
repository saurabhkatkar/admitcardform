import React from 'react';

const Search =({onInput,onSearch})=>{
	return(
 <div className ="d-flex justify-content-center mb-3 mt-5 form-inline" >
		
        <input className="form-control mr-sm-2" type="text" placeholder="Search Name"
         aria-label="Search" id="name" />
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={onSearch}>Search</button>
     
	</div>
	);
}

export default Search;