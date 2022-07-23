// import React from "react";


// const date = new Date();
// const currentTime = date.getHours();
// // let now = date.toLocaleTimeString();


// function theTime() {
// 	let date = new Date();
// 	let rightnow = date.toLocaleTimeString();
// 	// let mm = ""
// 	// let H = Datte.getHours();
// 	// let m = Datte.getMinutes(); 
// 	// let s = Datte.getSeconds();
// 	// if (H < 12) {
// 	// 	mm = "AM";
// 	// }
// 	// if (H === 0) {
// 	// 	H = 12;
// 	// }
// 	// if (H > 12) {
// 	// 	mm = "PM";
// 	// }
// 	// if (H > 12) {
// 	// 	H = H - 12;
// 	// }
// 	// if (H < 10) {
// 	// 	H = "0" + H;
// 	// }
// 	// if (m < 10) {
// 	// 	m = "0" + m;
// 	// }
// 	// if (s < 10) {
// 	// 	s = "0" + s;
// 	// }
// 	// document.getElementById("time").textContent = `${H}:${m}:${s} ${mm}`
// 	document.getElementById("time").textContent = `${rightnow}`
// }
// setInterval(theTime);

// let greeting;

// const customStyle = {
// 	color: ""
// };

// if (currentTime < 12) {
// 	greeting = "Good Morning";
// 	customStyle.color = "blue";
// } else if (currentTime < 18) {
// 	greeting = "Good Afternoon";
// 	customStyle.color = "blue";
// } else if (currentTime < 21) {
// 	greeting = "Good Evening";
// 	customStyle.color = "blue";
// } else {
// 	greeting = "Good Night";
// 	customStyle.color = "blue";
// }

// function Head() {

// 	return (
// 		// <div><div id="time"></div>
// 		<h1 className="heading" style={customStyle}>
// 			{greeting} <span id="time"></span>
// 		</h1>
// 	);

// }




// export default Head;