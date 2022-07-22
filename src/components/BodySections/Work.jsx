import React from "react";
import WorkCard from "./WorkCard";



function Work() {

	return (

		<div className="row rowow">
			<div className="col d3work dotted-spaced">



				<h3 className="sectionheader" id="Work">MY WORK</h3>
				<p className="sectiondescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.</p>



				<div className="row projectRow1">

					<WorkCard 
						img= "assets/images/placeholder.jpg"
						title = "Project 1"
						description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
					
					/>
					
					<WorkCard 
						img= "assets/images/placeholder.jpg"
						title = "Project 2"
						description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
					
					/>

				</div>



				<div className="row projectRow2">

					<WorkCard
						img="assets/images/placeholder.jpg"
						title="Project 3"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"

					/>

					<WorkCard
						img="assets/images/placeholder.jpg"
						title="Project 4"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"

					/>

				</div>




			</div>
		</div>

	)

}




export default Work;