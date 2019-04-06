import React from 'react';
import logo from './logo.jpeg';

const Resume=({details})=> {
		const {name,pnum,email,course,stream,college,board,cyear,cper,
			cstream,hsccol,hboard,colyear,per,school,sboard,sper,syear,os,exper,
			lan,proenv,tit,dob,lank,nat,rel,ms,add,pla,date}=details;
		return (
			<div>
	 <br/>
	<div className="container" style={{width:"80%",border:"3px solid black"}}>
		<br/>
		<div className="jumbotron" style={{height:"80%"}}>
			<div className="row">
				<div className="col-lg-4">
					<h3>{name}</h3>
					<p>Bachelor of Engineering</p>
					<p>ClassName of 2018</p>
				</div>
				<div className="col-lg-4" style={{margin:"auto",textAlign:"center"}}>
					<img src={logo} width="50%" height="auto"/>
				</div>
				<div className="col-lg-4" style={{textAlign:"center"}}>
					<h4>Atharva Educational Trust's</h4>
					<h2>Atharva College of Engineering</h2>
					<br/>
					<div style={{textAlign: "left"}}>
						<p>Mobile No.:+91 {pnum}</p>
						<p>Email:{email}</p>
					</div>
				</div>
			</div>
		</div>
		<div>
			<h3 style={{textTransform:"uppercase",background:"darkblue",color:"white"}}>Education Qualifications</h3>
		</div>
		<div style={{textAlign:"center"}}>
			<hr style={{margin:"10px"}}/>
			<div className="row" style={{background:"lightblue"}}>
				<div className="col-lg-2"><h4>Course</h4></div>
				<div className="col-lg-2"><h4>Stream</h4></div>
				<div className="col-lg-2"><h4>Institute</h4></div>
				<div className="col-lg-2"><h4>Board/University</h4></div>
				<div className="col-lg-2"><h4>Date of Passing</h4></div>
				<div className="col-lg-2"><h4>Percentage</h4></div>
			</div>
			<hr style={{margin:"10px"}}/>
			<div className="row">
				<div className="col-lg-2"><h4>{course}</h4></div>
				<div className="col-lg-2"><h4>{stream}</h4></div>
				<div className="col-lg-2"><h4>{college}</h4></div>
				<div className="col-lg-2"><h4>{board}</h4></div>
				<div className="col-lg-2"><h4>{cyear}</h4></div>
				<div className="col-lg-2"><h4>{cper}</h4></div>
			</div>
			<hr style={{margin:"10px"}}/>
			<div className="row">
				<div className="col-lg-2"><h4>H.S.C</h4></div>
				<div className="col-lg-2"><h4>{cstream}</h4></div>
				<div className="col-lg-2"><h4>{hsccol}</h4></div>
				<div className="col-lg-2"><h4>{hboard}</h4></div>
				<div className="col-lg-2"><h4>{colyear}</h4></div>
				<div className="col-lg-2"><h4>{per}</h4></div>
			</div>
			<hr style={{margin:"10px"}}/>
			<div className="row">
				<div className="col-lg-2"><h4>S.S.C</h4></div>
				<div className="col-lg-2"><h4>----</h4></div>
				<div className="col-lg-2"><h4>{school}</h4></div>
				<div className="col-lg-2"><h4>{sboard}</h4></div>
				<div className="col-lg-2"><h4>{syear}</h4></div>
				<div className="col-lg-2"><h4>{sper}%</h4></div>
			</div>
			<hr style={{margin:"10px"}}/>
		</div>
		<div>
			<h3 style={{textTransform:"uppercase",background:"darkblue",color:"white"}}>Skill Sets</h3>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Operating Systems :</h3></div>
			<div className="col-lg-6"><h4>{os}</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Expertise :</h3></div>
			<div className="col-lg-6"><h4>{exper}</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Languages :</h3></div>
			<div className="col-lg-6"><h4>{lan}</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Programming Environments :</h3></div>
			<div className="col-lg-6"><h4>{proenv}</h4></div>
		</div>
		<div>
			<h3 style={{textTransform:"uppercase",background:"darkblue",color:"white"}}>
				Academic Projects and Papers Presented
			</h3>
		</div>
		<div className="row" style={{border: "1px solid black",padding:"10px"}}>
			<div className="col-lg-2" style={{textTransform: "uppercase",background:"lightblue"}}><h3 style={{fontSize:"3rem !important"}}>Academic Projects</h3></div>
			<div className="col-lg-10">
			<p  style={{fontSize:"2.5rem !important"}}>Title: Analysis and ClassNameification of product reviews.
			Description: {tit}
			</p></div>
		</div>
		<div>
			<h3 style={{textTransform:"uppercase",background:"darkblue",color:"white"}}>
				Personal Details
			</h3>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Date of Birth : </h3></div>
			<div className="col-lg-6"><h4>{dob}</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Languages Known : </h3></div>
			<div className="col-lg-6"><h4>{lank}</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Nationality : </h3></div>
			<div className="col-lg-6"><h4>{nat}</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Religion : </h3></div>
			<div className="col-lg-6"><h4>{rel}</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Marital Status : </h3></div>
			<div className="col-lg-6"><h4>{ms}</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Address : </h3></div>
			<div className="col-lg-6">
				<h4>
					{add}
				</h4>
			</div>
		</div>
		<div>
			<h3 style={{textTransform:"uppercase",background:"darkblue",color:"white"}}>
				Declaration
			</h3>
		</div>
		<div className="row">
			<div className="col-lg-12">
				<h2>I hereby declare that the particulars furnished above are correct.</h2>
			</div>
		</div>
		<div className="row">
			<div className="col-lg-2"><h2>Place : </h2></div>
			<div className="col-lg-2"><h4><strong>{pla}</strong></h4></div>
		</div>
		<div className="row">
			<div className="col-lg-2"><h2>Date : </h2></div>
			<div className="col-lg-4"><h4><strong>{date}</strong></h4></div>
		</div>
		<div className="row">
			<div className="col-lg-3"></div>
			<div className="col-lg-3"></div>
			<div className="col-lg-3"></div>
			<div className="col-lg-3"><h3>{name}</h3></div>
		</div>
	</div>
	<br/>
	<br/>
	<br/>
			</div>
			);
 }

 export default Resume;