import React from "react";




function Resume() {

	return (

		<div className="row rowow">
			<div className="col dotted-spaced d4resume">
				<div className="col col-lg-10">

					<h3 className="sectionheader" id="Resume">Resumé</h3>

					<div className="col text-center dlbutton">
						<a className="btn" id="dlresume" href={require("../../assets/Donghoh-Han-CV.pdf")} target="_blank" rel="noreferrer">download pdf</a>
					</div>

					<div className="resumeContent">

						<div className="resumeSections">
							<h1><strong className="resumeheaders">Objective</strong></h1>
							<br></br>
							<p>To utilize my relentless creativity and design skills as a part of a team to create innovative and
								boundary pushing experiences and products.</p>
						</div>

						<br></br><br></br>

						<div className="resumeSections">
							<h1><strong className="resumeheaders">Education</strong></h1>
							<br></br>
							<p>University of California Irvine | May 2022-August 2022</p>
							<p>Full Stack Development Coding Boot Camp<br></br>Completion of the Full Stack Web Development program from UC Irvine.</p>
							<br></br>
							<p>San José State University | 2009-2014</p>
							<p>Bachelors of Fine Arts in Graphic Design<br></br>Degree in the highly respected and competitive BFA graphic design program at SJSU.</p>
						</div>


						<br></br><br></br>

						<div className="resumeSections">
							<h1><strong className="resumeheaders">Professional Experience</strong></h1>
							<br></br>
							<p>Alcon | Lake Forest, CA | February 2020-April 2022</p>
							<p>UI UX Designer</p>
							<p>Designed the User Interface and Experience of the latest cutting edge technology in Opthamology
								Surgical Devices. Focus was on creating efficient and intuitive surgical procedure workflows as
								well as giving it a modern, contemporary aesthetic.</p>
							<br></br>
							<p>Viscira | San Francisco, CA | December 2016-May 2019</p>
							<p>Lead Visual Designer</p>
							<p>Collaborated with production teams at a fast-pace agency environment to create and improve
								media pieces for numerous pharmaceutical brands. Worked on a wide range of mediums
								including virtual/augmented reality, phone/tablet applications, tradeshow, print, video.</p>
							<br></br>
							<p>Starlite LED/Flip Chip Opto/Cofan USA | Fremont, CA | August 2015-August 2016</p>
							<p>Lead Visual Designer and Marketing Manager</p>
							<p>Implemented a contemporary visual aesthetic to the brand to connect with new targeted
								demographics. Emphasis on creating and managing graphic assets for various marketing
								platforms including social media and tradeshows.</p>
							<br></br>
							<p>Linc Global Inc | Sunnyvale, CA | July 2014-September 2015</p>
							<p>Graphic Designer and Media Manager</p>
							<p>Illustrated creating memorable experiences that bring businesses and people together. Focus
								on creating, promoting and managing graphic assets for marketing campaigns. Lead in setting
								aesthetics for Linc's website, social media, presentations, stationery, and even office interior.</p>
							<br></br>
							<p>Mineta Transportation Institute | San José, CA | May 2012-December 2014</p>
							<p>In House Graphic Designer and Photographer</p>
							<p>Worked with the MTI team to create various print materials to further promote and progress the
								prominent work of the company; this includes creating brochures, flyers, invitations, holiday
								cards, posters, photographs, display boards, posters among others.</p>
						</div>

					</div>
				</div>
			</div>
		</div>
	);

}




export default Resume;