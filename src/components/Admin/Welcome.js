import React from "react";

function Welcome() {
	return (
		<div className="m-3">
			<h2>Welcome</h2>
			<p className="d-none d-md-block">
				This is the adminpanel, use the sidebar navigation on the left side to view the hotels, add new hotels and view
				messages. Messages and bookings is collected as comments in Wordpress.
			</p>
			<p className="d-md-none">
				The adminpanel is unfortunally not available for such small screens, please refer to using a device with a
				bigger screen.{" "}
			</p>
		</div>
	);
}

export default Welcome;
