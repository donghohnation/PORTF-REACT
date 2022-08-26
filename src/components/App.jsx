import React, { createContext, useState } from "react";
import { render } from "react-dom";
import ReactSwitch from "react-switch";
import Nav from "./Nav";
import Body from "./Body";
import ava from "../assets/images/Avatar-3_1-5.svg";
import ava2 from "../assets/images/profile_1-6.png";

// import Head from "./Head";

export const ThemeContext = createContext(null);





function App() {




	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((curr) => (curr === "light" ? "dark" : "light"));
	};



	

	const date = new Date();
	const currentTime = date.getHours();


	function theTime() {
		let date = new Date();
		let rightnow = date.toLocaleTimeString();
		document.getElementById("time").textContent = `${rightnow}`
	}
	setInterval(theTime);

	let greeting;

	const customStyle = {
		color: ""
	};

	if (currentTime < 12 && currentTime > 4) {
		greeting = "GOOD MORNING";
	} else if (currentTime < 18) {
		greeting = "GOOD AFTERNOON";
	} else if (currentTime < 22) {
		greeting = "GOOD EVENING";
	} else {
		greeting = "GOOD NIGHT";
	}


	


	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>

			<div className="App" id={theme}>

				<div id="navdiv">
					<div className="row">



						<div className="col-10">
							<h1 id="greettime" style={customStyle}>
								{greeting} <span id="time"></span>
							</h1>
						</div>


						<div className="col col-sm-2 nav">
							<ul>
								
								<li className="dash">_</li>
								<li><a href="#About Me">About Me</a></li>
								<li><a href="#Work">Work</a></li>
								<li><a href="#Contact-form">Contact</a></li>
								<li><a href="#Resume">Resume</a></li>
								<li><a href="#Top">Top</a></li>
								<br></br>
								<br></br>
								
								<li><a class="socials" href="https://www.linkedin.com/in/donghoh-han-7b3a4656/">LINKEDIN</a></li>
								<li><a class="socials" href="https://github.com/donghohnation">GITHUB</a></li>
								<li><a class="socials" href="https://www.behance.net/donghohnation/">BEHANCE</a></li>
								<br></br>
								<br></br>
								
								<div className="switch">
									<label id="lightdark"> {theme === "light" ? "TOGGLE DARK MODE" : "TOGGLE DARK MODE"}</label>
									<div>
									<ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
									</div>
								</div>

							</ul>
						</div>


					</div>
					<div className="parent">
						<img className="child1" id="avatar" src={ava} alt='avatar'></img>
						<img className="child2" id="avatar2" src={ava2} alt=''></img>
						

						

					</div>
				</div>











				{/* <Nav /> */}
				<Body />
			</div>

		</ThemeContext.Provider>
	);

}




export default App;