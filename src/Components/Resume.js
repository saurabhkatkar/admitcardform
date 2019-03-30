import React from 'react';
import logo from './logo.jpeg';

const Resume=({details})=> {
		return (
			<div>
	 <br/>
	<div className="container" style={{width:"80%",border:"3px solid black"}}>
		<br/>
		<div className="jumbotron" style={{height:"80%"}}>
			<div className="row">
				<div className="col-lg-4">
					<h3>{details.name}</h3>
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
						<p>Mobile No.:+91 {details.pnum}</p>
						<p>Email:{details.email}</p>
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
				<div className="col-lg-2"><h4>{details.course}</h4></div>
				<div className="col-lg-2"><h4>{details.stream}</h4></div>
				<div className="col-lg-2"><h4>{details.college}</h4></div>
				<div className="col-lg-2"><h4>{details.board}</h4></div>
				<div className="col-lg-2"><h4>2019</h4></div>
				<div className="col-lg-2"><h4>7.1 (CGPA)</h4></div>
			</div>
			<hr style={{margin:"10px"}}/>
			<div className="row">
				<div className="col-lg-2"><h4>H.S.C</h4></div>
				<div className="col-lg-2"><h4>Science</h4></div>
				<div className="col-lg-2"><h4>Patkar College</h4></div>
				<div className="col-lg-2"><h4>HSC</h4></div>
				<div className="col-lg-2"><h4>2015</h4></div>
				<div className="col-lg-2"><h4>73.54%</h4></div>
			</div>
			<hr style={{margin:"10px"}}/>
			<div className="row">
				<div className="col-lg-2"><h4>S.S.C</h4></div>
				<div className="col-lg-2"><h4>-</h4></div>
				<div className="col-lg-2"><h4>St. John's University School</h4></div>
				<div className="col-lg-2"><h4>ICSE</h4></div>
				<div className="col-lg-2"><h4>2013</h4></div>
				<div className="col-lg-2"><h4>90.54%</h4></div>
			</div>
			<hr style={{margin:"10px"}}/>
		</div>
		<div>
			<h3 style={{textTransform:"uppercase",background:"darkblue",color:"white"}}>Skill Sets</h3>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Operating Systems :</h3></div>
			<div className="col-lg-6"><h4>Windows, Linux</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Expertise :</h3></div>
			<div className="col-lg-6"><h4>Machine Learning</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Languages :</h3></div>
			<div className="col-lg-6"><h4>Java, C, C++, Python, HTML, SQL</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Programming Environments :</h3></div>
			<div className="col-lg-6"><h4>Visual Studio, Spyder, TurboC, Notepad++	,MySQL</h4></div>
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
			Description: Using sentiment analysis, reviews of a product are classNameified as positive or negative and overall sentiment about the product is obtained. Comparative study of various algorithms in terms of accuracy is done.
			</p></div>
		</div>
		<div>
			<h3 style={{textTransform:"uppercase",background:"darkblue",color:"white"}}>
				Personal Details
			</h3>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Date of Birth : </h3></div>
			<div className="col-lg-6"><h4>17-09-1997</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Languages Known : </h3></div>
			<div className="col-lg-6"><h4>English, Hindi, Marathi, Gujarati, French</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Nationality : </h3></div>
			<div className="col-lg-6"><h4>Indian</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Religion : </h3></div>
			<div className="col-lg-6"><h4>Christian</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Marital Status : </h3></div>
			<div className="col-lg-6"><h4>Un-Married</h4></div>
		</div>
		<div className="row">
			<div className="col-lg-6"><h3>Address : </h3></div>
			<div className="col-lg-6">
				<h4>
					A/301, Pran Bhuvan, L.T. Nagar, road no. 2, M.G road, Goregaon (west), Mumbai 400 062.
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
			<div className="col-lg-2"><h4><strong>Mumbai</strong></h4></div>
		</div>
		<div className="row">
			<div className="col-lg-2"><h2>Date : </h2></div>
			<div className="col-lg-4"><h4><strong>5th September 2018</strong></h4></div>
		</div>
		<div className="row">
			<div className="col-lg-3"></div>
			<div className="col-lg-3"></div>
			<div className="col-lg-3"></div>
			<div className="col-lg-3"><h3>Mathew Alexander Pazhur</h3></div>
		</div>
	</div>
	<br/>
	<br/>
	<br/>
			</div>
			);
 }

 export default Resume;