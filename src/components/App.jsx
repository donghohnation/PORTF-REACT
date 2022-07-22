import React, { useState } from "react";
import Nav from "./Nav";
import Body from "./Body";
import Head from "./Head";



function App() {

	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		// 👇️ toggle
		setIsActive(current => !current);
	}


    return (
		<div className="bodybackground" style={{ backgroundColor: isActive ? 'orange' : '', color: isActive ? 'white' : '', }}>

			<div>
				<button onClick={handleClick}>Click</button>
			</div>
			<Head />
			<Nav />
            <Body />
        </div>
    );

}




export default App;