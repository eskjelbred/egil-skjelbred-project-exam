import React from "react";

function ContactInfo() {
	return (
		<>
			<div className="d-flex flex-column align-items-center col-md-4 mt-5 ">
				<h3>Openinghours</h3>
				<p>
					<b className="pe-3">Mon - Fri</b>8am - 6pm
				</p>
				<p>
					<b className="pe-3">Saturday</b>9am - 2pm
				</p>
				<p>
					<b className="pe-3">Sunday</b>Closed
				</p>
			</div>
		</>
	);
}

export default ContactInfo;
