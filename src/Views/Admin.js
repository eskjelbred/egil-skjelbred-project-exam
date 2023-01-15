import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import AddPost from "../components/Admin/AddPost";
import ShowPostList from "../components/Admin/ShowPostList";
import MessageList from "../components/Admin/MessageList";
import BookingList from "../components/Admin/BookingList";
import Welcome from "../components/Admin/Welcome";
import { getToken } from "../constants/settings";
import ForceLogout from "../constants/ForceLogout";
import Footer from "../components/Footer/Footer";

function Admin() {
	const [dashboardView, setDashboardView] = useState("");
	const [forceLogout, setForceLogout] = useState(false);
	const token = getToken();

	useEffect(() => {
		if (!token) {
			setForceLogout(true);
		} else {
			setForceLogout(false);
		}
	}, [token]);

	const handleDashboard = (newDashboard) => {
		setDashboardView(newDashboard);
	};

	const handleSearchClick = (event) => {
		window.location.replace("/booking/" + event.target.id);
	};

	return (
		<>
			<Container>
				{forceLogout && <ForceLogout />}
				<Navigation />
				<div className="main-content d-flex">
					<nav className="col-md-2 d-none d-md-block bg-secondary sidebar">
						<div className="sidebar-sticky">
							<h6 className="sidebar-heading d-flex justify-content-between align-items-center ">
								<span>Hotels</span>
							</h6>
							<ul className="nav flex-column">
								<li className="nav-item">
									<Link className="nav-link text-white" onClick={() => handleDashboard("postList")}>
										View hotels
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link text-white" onClick={() => handleDashboard("addPost")}>
										Add hotels
									</Link>
								</li>
							</ul>

							<h6 className="sidebar-heading d-flex justify-content-between align-items-center ">
								<span>Messages</span>
							</h6>
							<ul className="nav flex-column mb-2">
								<li className="nav-item">
									<Link className="nav-link text-white" onClick={() => handleDashboard("messageList")}>
										View messages
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link text-white" onClick={() => handleDashboard("bookingList")}>
										View bookings
									</Link>
								</li>
							</ul>
						</div>
					</nav>

					{dashboardView === "addPost" ? (
						<AddPost />
					) : dashboardView === "postList" ? (
						<ShowPostList />
					) : dashboardView === "messageList" ? (
						<MessageList />
					) : dashboardView === "bookingList" ? (
						<BookingList />
					) : (
						<Welcome />
					)}
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Admin;
