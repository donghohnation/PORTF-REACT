import React, { createContext, useState } from "react";
// import { render } from "react-dom";
// import ReactSwitch from "react-switch";
// import Nav from "./Nav";
import Body from "./Body";
import ava from "../assets/images/Avatar-3_1-5.svg";
import ava2 from "../assets/images/profile_1-6.png";

// import Head from "./Head";

export const ThemeContext = createContext(null);





function App() {




	const [theme, setTheme] = useState("dark");



	const dk = () => {
		if (theme === "dark") {
			document.getElementById("darkr").checked = true;
		};
	}

	window.addEventListener('load', dk);



	let themeSto = localStorage.getItem("themeSto", "");



	const lightmode = () => {
		setTheme("");
		localStorage.setItem("themeSto", "");
		document.getElementById("lightr").checked = true;
		document.getElementById("darkr").checked = false;
		document.getElementById("neubr").checked = false;
	};

	const darkmode = () => {
		setTheme("dark");
		localStorage.setItem("themeSto", "dark");
		document.getElementById("lightr").checked = false;
		document.getElementById("darkr").checked = true;
		document.getElementById("neubr").checked = false;
	};

	const neubmode = () => {
		setTheme("neub");
		localStorage.setItem("themeSto", "neub");
		document.getElementById("lightr").checked = false;
		document.getElementById("darkr").checked = false;
		document.getElementById("neubr").checked = true;
	};

	if (themeSto === "") {
		window.addEventListener('load', lightmode);
	} else if (themeSto === "dark") {
		window.addEventListener('load', darkmode);
	} else if (themeSto === "neub") {
		window.addEventListener('load', neubmode);
	}








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
		<ThemeContext.Provider>

			<div className="App" id={theme}>

				<div id="navdiv">
					<div className="row">



						<div className="col-10">
							<h2 id="greettime" style={customStyle}>
								{greeting} <span id="time"></span>
							</h2>
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

								<li><a class="socials" href="https://www.linkedin.com/in/donghoh-han-7b3a4656/" target="_blank" rel="noreferrer">LINKEDIN</a></li>
								<li><a class="socials" href="https://github.com/donghohnation" target="_blank" rel="noreferrer">GITHUB</a></li>
								<li><a class="socials" href="https://www.behance.net/donghohnation/" target="_blank" rel="noreferrer">BEHANCE</a></li>
								<br></br>
								<br></br>

								<fieldset>
									<div>
										<input onChange={darkmode} type="checkbox" className="checkboxes" id="darkr" name="lmode" value="darkr" />
										<label className="checkboxlabel" for="darkr"> &nbsp; DARK</label>
									</div>
									<div>
										<input onChange={neubmode} type="checkbox" className="checkboxes" id="neubr" name="lmode" value="neubr" />
										<label className="checkboxlabel" for="neubr"> &nbsp; NEUB</label>
									</div>
									<div>
										<input onChange={lightmode} type="checkbox" className="checkboxes" id="lightr" name="lmode" value="lightr" />
										<label className="checkboxlabel" for="lightr"> &nbsp; LIGHT</label>
									</div>
								</fieldset>





							</ul>
						</div>


					</div>
					<div className="parent">
						<img className="child1" id="avatar" src={ava} alt='avatar'></img>
						<img className="child2" id="avatarPXL" src={ava2} alt='avatarPXL'></img>




					</div>
				</div>











				{/* <Nav /> */}
				<Body />
			</div>

		</ThemeContext.Provider>
	);

}




export default App;