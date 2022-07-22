import React from "react";




function WorkCard(props) {

	return (
		<div className="col projectDiv  no-gutters">
			{/* <div className="text-center"> */}
				<img className="image"
					src={props.img}
					alt="Project 1" />
			{/* </div> */}
			<h4 className="projectTitles">{props.title}</h4>
			<p className="projectDescriptions">
				{props.description}
			</p>
			<div className="projectTechDiv">
				<span className="projectTech">HTML</span>
				<span className="projectTech">CSS</span>
				<span className="projectTech">Javascript</span>
				<span className="projectTech">Node.js</span>
			</div>
			<div className="text-center">
				<button className="projBtn" href={props.sourcelink}>source code</button><button className="projBtn" href={props.deploylink}>deployed link</button>
			</div>
		</div>
	)

}




export default WorkCard;