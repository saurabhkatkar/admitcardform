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
   				 <label >College year</label>
   				 <input type="text" className="form-control" id="cyear" placeholder="Enter College Year" />
   				 <label >College Percentage/CGPA</label>
   				 <input type="text" className="form-control" id="cper" placeholder="Enter CGPA" />
   				 <label >HSC Stream</label>
   				 <input type="text" className="form-control" id="cstream" placeholder="Enter College Stream" />
   				 <label >HSC College</label>
   				 <input type="text" className="form-control" id="hsccol" placeholder="Enter HSC College" />
   				  <label >HSC Board</label>
   				 <input type="text" className="form-control" id="hboard" placeholder="Enter HSC College" />
   				 <label >HSC Year</label>
   				 <input type="text" className="form-control" id="colyear" placeholder="Enter HSC Year" />
   				 <label >Percentage/CGPA</label>
   				 <input type="text" className="form-control" id="per" placeholder="Enter Percantage/CGPA" />
   				 <label >SSC School</label>
   				 <input type="text" className="form-control" id="school" placeholder="Enter School Name" />
   				 <label >SSC Board</label>
   				 <input type="text" className="form-control" id="sboard" placeholder="Enter School Board" />
   				 <label >SSC Year</label>
   				 <input type="text" className="form-control" id="syear" placeholder="Enter School Year" />
   				 <label >Percentage/CGPA</label>
   				 <input type="text" className="form-control" id="sper" placeholder="Enter School Percentage" />
   				 <label >Skills</label>
   				 <label >Operating Systems</label>
   				 <input type="text" className="form-control" id="os" placeholder="Enter Operating Systems" />
   				 <label >Expertise</label>
   				 <input type="text" className="form-control" id="exper" placeholder="Enter Expertise" />
   				 <label >Languages</label>
   				 <input type="text" className="form-control" id="lan" placeholder="Enter Languages" />
   				 <label >Programming Environments</label>
   				 <input type="text" className="form-control" id="proenv" placeholder="Enter Programming Environments" />
				 <label >Academic Projects</label>
   				 <label >Titles</label>
   				 <input type="text" className="form-control" id="tit" placeholder="Enter Titles" />
   				 <label >Personal Details</label>
   				 <label >Date of Birth</label>
   				 <input type="text" className="form-control" id="dob" placeholder="Enter Date Of Birth" />
   				  <label >Languages Known</label>
   				 <input type="text" className="form-control" id="lank" placeholder="Enter Languages" />
   				  <label >Nationality</label>
   				 <input type="text" className="form-control" id="nat" placeholder="Enter Nationality" />
   				  <label >Religion</label>
   				 <input type="text" className="form-control" id="rel" placeholder="Enter Religion" />
   				  <label >Marital Status</label>
   				 <input type="text" className="form-control" id="ms" placeholder="Enter Marital Status" />
   				  <label >Address</label>
   				 <input type="text" className="form-control" id="add" placeholder="Enter Address" />
				<label >Declaration</label>
				 <label >Place</label>
   				 <input type="text" className="form-control" id="pla" placeholder="Enter Place" />
				 <label >Date</label>
   				 <input type="text" className="form-control" id="date" placeholder="Enter Date" />
				
   				 <input type="submit" value="Submit" onClick={onSubmit}/>

			</div>
			);
 }

 export default resumeform;