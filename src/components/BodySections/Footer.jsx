import React from "react";
import ava from "../../assets/images/Avatar-4_footer.svg"



function Footer() {

	return (
		<div className="row rowow footer d-flex align-items-center justify-content-center">


			<div className="col ">
				<h2 className="" id="footerdivleft">ⓒ 2022 Donghoh Han</h2>
			</div>


			<div className="col-2 text-center"><img id="footeravatar" src={ava} alt='footeravatar'></img>
			</div>


			<div className="col" id="footerdivright">
				<h2 className="" id="footerdivright">All Rights Reserved</h2>
			</div>


		</div>
	)

}




export default Footer;