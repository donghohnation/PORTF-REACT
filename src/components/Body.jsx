import React from "react";
import Hero from "./BodySections/Hero"
import AboutMe from "./BodySections/AboutMe";
import Work from "./BodySections/Work";
import Contact from "./BodySections/Contact";
import Resume from "./BodySections/Resume"
import Footer from "./BodySections/Footer";




function Body() {

	return (
		<div className="content">
			<Hero />
			<AboutMe />
			<Work />
			<Contact />
			<Resume />
			<Footer />
		</div>
	)

}




export default Body;