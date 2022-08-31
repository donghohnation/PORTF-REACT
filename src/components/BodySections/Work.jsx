import React from "react";
import WorkCard from "./WorkCard";



function Work() {

	return (

		<div className="row rowow">
			<div className="col d3work dotted-spaced">



				<h3 className="sectionheader" id="Work">MY WORK</h3>
				{/* <p className="sectiondescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.</p> */}



				<div className="row projectRow1">

					<WorkCard
						img={require("../../assets/images/proj4_babble.png")}
						title="Babble Exchange"
						description="Chat application to chat with your friends"
						sourcelink="https://github.com/DesertCow/Babble-Exchange"
						deploylink="https://babble-exchange.herokuapp.com/"
						projecttech="HTML CSS JAVASCRIPT REACT MONGODB"
					/>

					<WorkCard
						img={require("../../assets/images/proj1_supersearch.png")}
						title="Superhero Gif Search"
						description="Do you like superheroes and need a gif to show it? Use this app!"
						sourcelink="https://github.com/lamnong/project1.team2"
						deploylink="https://lamnong.github.io/project1.team2/"
						projecttech="HTML CSS JAVASCRIPT"
					/>


				</div>



				<div className="row projectRow2">

					<WorkCard
						img={require("../../assets/images/proj5_gifstagram.png")}
						title="Gifsta"
						description="It's like Instagram, for GIFs!"
						sourcelink="https://github.com/donghohnation/gifstagram"
						deploylink="https://donghohnation.github.io/gifstagram/"
						projecttech="HTML CSS JAVASCRIPT"
					/>

					<WorkCard
						img={require("../../assets/images/proj3_weather.png")}
						title="Weather Forcast"
						description="Forcast the weather in any city for the next 5 days."
						sourcelink="https://github.com/donghohnation/weathcast"
						deploylink="https://donghohnation.github.io/weathcast/"
						projecttech="HTML CSS JAVASCRIPT"
					/>

					{/* <WorkCard
						img={require("../../assets/images/proj2_drinkreviews.png")}
						title="Drink Reviews"
						description="Do you like trying out new drinks? Keep track of the drinks you've tried and liked!"
						sourcelink="https://github.com/donghohnation/drink-reviews"
						deploylink="https://drinkrevi.herokuapp.com/"
						projecttech="HTML CSS JAVASCRIPT NODE MYSQL EXPRESS"

					/> */}
					
				</div>



				<div className="row projectRow2">

					<WorkCard
						img="https://images.squarespace-cdn.com/content/v1/5463c949e4b05c41e0cd708f/1642533428145-5P86DP6EB5BTCP17NJCH/st3.jpg?format=2500wg"
						title="Starlite + Flip Chip Opto"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
						sourcelink="https://donghohdesigns.squarespace.com/starlite-flip-chip-opto/"
						deploylink="https://donghohdesigns.squarespace.com/starlite-flip-chip-opto/"
						projecttech="PHOTOSHOP LIGHTROOM ILLUSTRATOR"
					/>

					<WorkCard
						img="https://images.squarespace-cdn.com/content/v1/5463c949e4b05c41e0cd708f/1557431867842-H4R97KPXDVQH76ECFV8Z/Skyboxx_Logo_v13_1_chosen-4-cropped.jpg?format=1000w"
						title="The Skyboxx"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
						sourcelink="https://donghohdesigns.squarespace.com/the-skyboxx-recording-studio/"
						deploylink="https://donghohdesigns.squarespace.com/the-skyboxx-recording-studio/"
						projecttech="ILLUSTRATOR"
					/>

				</div>


			</div>
		</div>

	)

}




export default Work;