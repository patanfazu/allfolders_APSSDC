import React from 'react'
import {profiles} from './data.json';
import './App.css';

let Resume=(props)=>{
	var info=profiles[props.location.data.id];
	return(
		<section className="parent">
		<article className="basicsCard">
			<h2>{info.basics.name}</h2>
			<h4>{info.basics.role}</h4>
			<a href={"mailto:"+info.basics.email} className="link1">{info.basics.email}</a>
		</article>
		<article className="contentCard">
		<h2> Summary</h2> <hr/>
		<ul>
		{info.summary.map((summaryValue,summaryIndex)=>(
			<li key={summaryIndex}>{summaryValue}</li>


			))}
		</ul>
		<h2> Educational Qualifications</h2> <hr />
		<div>
		<table border="1" className="table">
		<thead>
		
		<tr>
			<th>Degree</th>
			<th>Percentage</th>
			<th>Year</th>
		</tr>
		</thead>
		<tbody>
			{info.education.map((educationValue,educationIndex)=>(
				<tr>
				<td>{educationValue.degree}</td>
				<td>{educationValue.percentage}</td>
				<td>{educationValue.year}</td>
			</tr>

			))}
			
		</tbody>
		
		</table>
		</div>
		<h2>Skills</h2> <hr/>
		<div> 
			{info.skills.map((skillsValue,skilsIndex)=>(
				<ul>
					<h3>{skillsValue.type}</h3>
					{skillsValue.values.map((skillsValuevalues,skillsValueIndex)=>(
						<span className="skills">{skillsValuevalues}</span>

					))}
					
				
				</ul>
				

			))}
		</div>

		</article>

		</section>
		)

}
export default Resume;
