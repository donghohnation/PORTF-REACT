import React from "react";




function WorkCard(props) {

	return (
		<div className="col-12 col-md-10 col-lg-5 projectDiv">



			<img className="image"
				src={props.img}
				alt="Project 1" />

			<div className="projectContent">
				<h4 className="projectTitles">{props.title}</h4>


				<div className="projectTechDiv">
					<span className="projectTech">{props.projecttech}</span>
				</div>


				<p className="projectDescriptions">
					{props.description}
				</p>
			</div>


			<div className="row projBtns">

				<a className="col text-center btn" href={props.sourcelink} target="_blank">source code</a>

				<a className="col text-center btn" href={props.deploylink} target="_blank">deployed link</a>

			</div>



		</div>
	)

}




export default WorkCard;