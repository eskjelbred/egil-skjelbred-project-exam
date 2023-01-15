import React from "react";
import { Link } from "react-router-dom";

function ForceLogout() {
	return (
		<>
			<div className="forcelogout">
				<p>You have been logged out due to error with credentials </p>
				<Link to="/">Go back to homepage</Link>
			</div>
		</>
	);
}

export default ForceLogout;
