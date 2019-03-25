import React from 'react';

const form=({stud,changeRoute})=> {

        return (
        <div>
        <span className="btn btn-link" href="#" onClick={changeRoute}>Back</span>
        <div className="container" style={{border:'2px solid black',padding:'1.5em'}}>
		<div className="row">
			<div className="col-lg-12" style={{textAlign:'center',margin:'auto'}}><h3><strong>Atharva College of Engineering</strong></h3><p>Mumbai-400 095</p><h3><strong>HALL TICKET</strong></h3></div>
		</div>
		<hr style={{size:'10px',width:'90%'}}/>
		<div className="row" style={{width:'90%',margin:'auto'}}>
			<div className="col-lg-6"><p>Examination :</p></div>
			<div className="col-lg-6"><p style={{textTransform: 'uppercase'}}>Second year computer engineering semester ||| (CBCGS)</p></div>
		</div>
		<div className="row" style={{width:'90%',margin:'auto'}}>
			<div className="col-lg-6"><p>Name :</p></div>
			<div className="col-lg-6"><p style={{textTransform: 'uppercase'}}>{stud}</p></div>
		</div>
		<div className="row" style={{width:'90%',margin:'auto'}}>
			<div className="col-lg-6"><p>Exam Held in :</p></div>
			<div className="col-lg-6"><p style={{textTransform: 'uppercase'}}>December 2017</p></div>
		</div>
		<div className="row" style={{width:'90%',margin:'auto'}}>
			<div className="col-lg-6"><p>College Code :</p></div>
			<div className="col-lg-6"><p>0532</p></div>
		</div>
		<hr style={{size:'10px',width:'90%'}}/>
		<div className="row" style={{width:'90%',margin:'auto'}}>
			<div className="col-lg-3"><h3>Gr No.</h3><br/><p>CS17204</p></div>
			<div className="col-lg-3"><h3>Seat No.</h3><br/><p>282302</p></div>
			<div className="col-lg-3"><h3>Div</h3><br/><p>A</p></div>
			<div className="col-lg-3"><h3>M/F</h3><br/><p>M</p></div>
		</div>
		<hr style={{size:'10px',width:'90%'}}/>
		<hr/>
		<div className="row" style={{textAlign:'center'}}>
			<div className="col-lg-6"><h2>University Code</h2></div>
			<div className="col-lg-6"><h2>Subject</h2></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><p>CSC301</p></div>
			<div className="col-lg-6"><p style={{textTransform: 'uppercase'}}>Applied Mathematics- III</p></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><p>CSC302</p></div>
			<div className="col-lg-6"><p style={{textTransform: 'uppercase'}}>Digital Logic Design and Analysis</p></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><p>CSC303</p></div>
			<div className="col-lg-6"><p style={{textTransform: 'uppercase'}}>Discrete Mathematics</p></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><p>CSC304</p></div>
			<div className="col-lg-6"><p style={{textTransform: 'uppercase'}}>ELECTRONIC CIRCUITS AND COMMUNICATION FUNDAMENTALS</p></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><p>CSC305</p></div>
			<div className="col-lg-6"><p style={{textTransform: 'uppercase'}}>DATA STRUCTURES</p></div>
		</div>
		<hr style={{size:'10px'}}/>
		<div className="row">
				<div className="col-lg-6"><p style={{display:'inline-table',marginTop:'50%'}}>Candidate's Signature</p></div>
				<div className="col-lg-6">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDNoS3EXzNWEr3h0Zk76vhstBpSAsMYiax8Ong0p7zs69TAZgSw" width="50%" height="70%" style={{margin:'auto'}}/>
					<p>Principal's Signature on the Canditate's Photo</p>
				</div>
		</div>
		<div>
	</div>
	<br/>
	<h4><strong>NOTE: Canditate Must Preserve And Produce This Card At Each Session Of The Examination, Without Which Admission To The Examination May Be Disallowed</strong></h4>
</div>
	</div>
		);
 }


export default form;