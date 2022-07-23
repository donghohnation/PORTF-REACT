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


			<div className="projectTechDiv">
				<span className="projectTech">{props.projecttech}</span>
			</div>


			<p className="projectDescriptions">
				{props.description}
			</p>


			<div className="text-center projBtns">
				<a className="projBtn" href={props.sourcelink} target="_blank">source code</a><a className="projBtn" href={props.deploylink} target="_blank">deployed link</a>
			</div>



		</div>
	)

}




export default WorkCard;