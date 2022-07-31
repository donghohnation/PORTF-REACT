import React, { useState } from "react";
import ava from "../assets/images/Avatar-3_1-5.svg"






function Nav() {
	
	const date = new Date();
	const currentTime = date.getHours();
	// let now = date.toLocaleTimeString();
	
	
	function theTime() {
		let date = new Date();
		let rightnow = date.toLocaleTimeString();
		// let mm = ""
		// let H = Datte.getHours();
		// let m = Datte.getMinutes(); 
		// let s = Datte.getSeconds();
		// if (H < 12) {
		// 	mm = "AM";
		// }
		// if (H === 0) {
		// 	H = 12;
		// }
		// if (H > 12) {
		// 	mm = "PM";
		// }
		// if (H > 12) {
		// 	H = H - 12;
		// }
		// if (H < 10) {
		// 	H = "0" + H;
		// }
		// if (m < 10) {
		// 	m = "0" + m;
		// }
		// if (s < 10) {
		// 	s = "0" + s;
		// }
		// document.getElementById("time").textContent = `${H}:${m}:${s} ${mm}`
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
		<div>
			<div className="row">
			


				<div className="col col-sm">
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
					</ul>
				</div>


			</div>
			<div>
					<img id="avatar" src={ava} alt='avatar'></img>
			</div>
		</div>
	)

}




export default Nav;