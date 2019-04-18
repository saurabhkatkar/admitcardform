import React from 'react';


const resumeform=({onSubmit})=> {
		return (
         <div className="container">
         <div className="row">
            <div className="col-lg-6">
				  <label>Name</label>
   			   <input type="text" className="input" id="sname" placeholder="Enter Name" required/>
            </div>
            <div className="col-lg-6">
   		    <label>Phone Number</label>
   		    <input type="text" className="input" id="pnum"  placeholder="Enter Phone Number" />
            </div>
         </div>
         <br/>
         <div className="row">
            <div className="col-lg-12">
	 		  <label >Email address</label>
   		    <input type="email" className="input" id="email" placeholder="Enter email" />
            </div>
         </div>
         <br/>
         <div className="row">
            <div className="col-lg-4">
               <label >Course</label>
               <input type="text" className="input" id="course" placeholder="Enter Course" />
            </div>
            <div className="col-lg-4">
               <label>Stream</label>
               <input type="text" className="input" id="stream"  placeholder="Enter Stream" />
            </div>
            <div className="col-lg-4">
               <label >Institution</label>
               <input type="text" className="input" id="college" placeholder="Enter Institution Name" />
            </div>
         </div>
         <br/>
   		<div className="row">
            <div className="col-lg-4">
               <label >Board/University</label>
               <input type="text" className="input" id="board" placeholder="Enter Board" />
            </div>
            <div className="col-lg-4">
               <label >College year</label>
               <input type="text" className="input" id="cyear" placeholder="Enter College Year" />
            </div>
            <div className="col-lg-4">
               <label >College Percentage/CGPA</label>
               <input type="text" className="input" id="cper" placeholder="Enter CGPA" />
            </div>
         </div>
         <br/>
         <div className="row">
            <div className="col-lg-2">
               <label >HSC College</label>
               <input type="text" className="input" id="hsccol" placeholder="Enter HSC College" />
            </div>
            <div className="col-lg-2">
               <label >HSC Stream</label>
               <input type="text" className="input" id="cstream" placeholder="Enter College Stream" />
            </div>
            <div className="col-lg-2">
               <label >HSC Board</label>
               <input type="text" className="input" id="hboard" placeholder="Enter HSC Board" />
            </div>
            <div className="col-lg-3">
               <label >HSC Year</label>
               <input type="text" className="input" id="colyear" placeholder="Enter HSC Year" />
            </div>
            <div className="col-lg-3">
               <label >Percentage/CGPA</label>
               <input type="text" className="input" id="per" placeholder="Enter Percantage/CGPA" />
            </div>
         </div>
         <br/>
         <div className="row">
            <div className="col-lg-2">
               <label >SSC School</label>
               <input type="text" className="input" id="school" placeholder="Enter School Name" />
            </div>
            <div className="col-lg-2">
               <label >HSC Stream</label>
               <input type="text" className="input" id="cstream" placeholder="Enter College Stream" />
            </div>
            <div className="col-lg-2">
               <label >SSC Board</label>
               <input type="text" className="input" id="sboard" placeholder="Enter School Board" />
            </div>
            <div className="col-lg-3">
               <label >SSC Year</label>
               <input type="text" className="input" id="syear" placeholder="Enter School Year" />
            </div>
            <div className="col-lg-3">
               <label >Percentage/CGPA</label>
               <input type="text" className="input" id="sper" placeholder="Enter School Percentage" />
            </div>
         </div>
         <br/>
   		<h3>Skills</h3>
         <div className="row">
            <div className="col-lg-3">
               <label >Operating Systems</label>
               <input type="text" className="input" id="os" placeholder="Enter Operating Systems" />
            </div>
            <div className="col-lg-3">
               <label >Expertise</label>
               <input type="text" className="input" id="exper" placeholder="Enter Expertise" />
            </div>
            <div className="col-lg-3">
               <label >Languages</label>
               <input type="text" className="input" id="lan" placeholder="Enter Languages" />
            </div>
            <div className="col-lg-3">
               <label >Programming Environments</label>
               <input type="text" className="input" id="proenv" placeholder="Enter Programming Environments" />
            </div>
         </div>
         <br/>
			<h3 >Academic Projects</h3>
         <div className="row">
            <div className="col-lg-12">
               <label >Titles</label>
               <input type="text" className="input" id="tit" placeholder="Enter Titles" />
            </div>
         </div>
         <br/>
   		<h3>Personal Details</h3>
         <div className="row">
            <div className="col-lg-3">
         		<label >Date of Birth</label>
         		<input type="text" className="input" id="dob" placeholder="Enter Date Of Birth" />
            </div>
            <div className="col-lg-3">
               <label >Languages Known</label>
               <input type="text" className="input" id="lank" placeholder="Enter Languages" />
            </div>
            <div className="col-lg-3">
               <label >Nationality</label>
               <input type="text" className="input" id="nat" placeholder="Enter Nationality" />
            </div>
            <div className="col-lg-3">
               <label >Religion</label>
               <input type="text" className="input" id="rel" placeholder="Enter Religion" />
            </div>
         </div>
         <br/>
         <div className="row">
            <div className="col-lg-6">
               <label >Marital Status</label>
               <input type="text" className="input" id="ms" placeholder="Enter Marital Status" />
            </div>
            <div className="col-lg-6">
               <label >Address</label>
               <input type="text" className="input" id="add" placeholder="Enter Address" />
            </div>
         </div>
         <br/>
			<h3>Declaration</h3>
         <div className="row">
            <div className="col-lg-6">
               <label >Place</label>
               <input type="text" className="input" id="pla" placeholder="Enter Place" />
            </div>
            <div className="col-lg-6">
               <label >Date</label>
               <input type="date" className="input" id="date" placeholder="Enter Date" />
            </div>
         </div>
         <br/>
			<input type="submit" value="Submit" style={{width:"50%",margin:"auto",textAlign:"center"}} onClick={onSubmit}/>
         <br/>
         <br/>
			</div>
			);
 }

 export default resumeform;