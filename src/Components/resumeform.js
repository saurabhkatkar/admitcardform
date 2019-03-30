import React from 'react';


const resumeform=({onSubmit})=> {
		return (
			<div className="container">
				 <label >Name</label>
   				 <input type="text" className="form-control" id="sname" placeholder="Enter Name" />
   				 <label>Phone Number</label>
   				 <input type="text" className="form-control" id="pnum"  placeholder="Enter Phone Number" />
	 			 <label >Email address</label>
   				 <input type="email" className="form-control" id="email" placeholder="Enter email" />
   				 <label >Course</label>
   				 <input type="text" className="form-control" id="course" placeholder="Enter Course" />
   				 <label >Stream</label>
   				 <input type="text" className="form-control" id="stream"  placeholder="Enter Stream" />
				 <label >Institution</label>
   				 <input type="text" className="form-control" id="college" placeholder="Enter Institution Name" />
   				 <label >Board/University</label>
   				 <input type="text" className="form-control" id="board" placeholder="Enter Board" />
   				 <input type="submit" value="Submit" onClick={onSubmit}/>

			</div>
			);
 }

 export default resumeform;