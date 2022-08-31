import React from "react";
import logo_adobe_illustrator from "../../assets/images/skillslogos/logo_adobe_illustrator.svg";
import logo_adobe_indesign from "../../assets/images/skillslogos/logo_adobe_indesign.svg";
import logo_adobe_photoshop from "../../assets/images/skillslogos/logo_adobe_photoshop.svg";
import logo_adobe_premier from "../../assets/images/skillslogos/logo_adobe_premier.svg";
import logo_adobe_xd from "../../assets/images/skillslogos/logo_adobe_xd.svg";
import logo_bootstrap from "../../assets/images/skillslogos/logo_bootstrap.svg";
import logo_css from "../../assets/images/skillslogos/logo_css.svg";
import logo_html from "../../assets/images/skillslogos/logo_html.svg";
import logo_javascript from "../../assets/images/skillslogos/logo_javascript.svg";
import logo_jquery from "../../assets/images/skillslogos/logo_jquery.svg";
import logo_mysql from "../../assets/images/skillslogos/logo_mysql.svg";
import logo_node from "../../assets/images/skillslogos/logo_node.svg";
import logo_npm from "../../assets/images/skillslogos/logo_npm.svg";
import logo_react from "../../assets/images/skillslogos/logo_react.svg";




function AboutMe() {

	return (
		<div className="row rowow">


			<div class="col d2about dotted-spaced" id="About Me">
				<h3 class="sectionheader">ABOUT ME</h3>
				<p class="sectiondescription">California based Graphic and UI/UX Designer and Web Developer.
					{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
				</p>

				<div className="row">


					<div class="col-5 col-sm-2">

						<img className="skillslogo" id="" src={logo_jquery} alt=''></img>

						<img className="skillslogo" id="" src={logo_mysql} alt=''></img>

						<img className="skillslogo" id="" src={logo_adobe_premier} alt=''></img>

					</div>


					<div class="col-5 col-sm-2">

						<img className="skillslogo" id="" src={logo_react} alt=''></img>

						<img className="skillslogo" id="" src={logo_adobe_xd} alt=''></img>

						<img className="skillslogo" id="" src={logo_bootstrap} alt=''></img>

					</div>


					<div class="col-5 col-sm-2">

						<img className="skillslogo" id="" src={logo_adobe_illustrator} alt=''></img>

						<img className="skillslogo" id="" src={logo_adobe_indesign} alt=''></img>

						<img className="skillslogo" id="" src={logo_adobe_photoshop} alt=''></img>


					</div>


					<div class="col-5 col-sm-2">

						<img className="skillslogo" id="" src={logo_css} alt=''></img>

						<img className="skillslogo" id="" src={logo_html} alt=''></img>

						<img className="skillslogo" id="" src={logo_javascript} alt=''></img>

					</div>


					<div class="col-5 col-sm-2">

						<img className="skillslogo" id="" src={logo_node} alt=''></img>

						<img className="skillslogo" id="" src={logo_npm} alt=''></img>

					</div>


				</div>


			</div>


		</div>
	)

}




export default AboutMe;