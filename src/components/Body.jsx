import React from "react";
import Hero from "./BodySections/Hero"
import AboutMe from "./BodySections/AboutMe";
import Work from "./BodySections/Work";
import Contact from "./BodySections/Contact";
import Resume from "./BodySections/Resume"




function Body() {

    return (
        <div className="content">
            <Hero />
            <AboutMe />
            <Work />
            <Contact />
            <Resume />
        </div>
    )

}




export default Body;