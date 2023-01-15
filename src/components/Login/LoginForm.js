import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { saveToStorage } from "../../constants/settings";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";

const url = BASE_URL + TOKEN_PATH;

function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(false);
	const [loginError, setLoginError] = useState(null);
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	async function handleSubmit(event) {
		setSubmitting(true);
		setLoginError(null);
		event.preventDefault();
		console.log(inputs);

		try {
			const response = await axios.post(url, inputs);
			console.log("response", response.data);
			saveToStorage("token", response.data.token);
			window.location.href = "/admin";
		} catch (error) {
			setError(true);
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return error ? (
		<p>{loginError}</p>
	) : (
		<div className="main-content card border-0">
			<div className="row g-0 d-flex align-items-center justify-content-center">
				<div className="col-lg-4">
					<div className="card-body py-5 px-md-5">
						<h3 className="text-center">Access your adminpanel</h3>
						<Form onSubmit={handleSubmit} className="d-flex row align-items-center m-auto mt-5">
							<Form.Group className="mb-3" controlId="identifier">
								<Form.Control type="text" name="username" onChange={handleChange} placeholder="username" />
								{}
							</Form.Group>

							<Form.Group className="mb-3" controlId="password">
								<Form.Control type="password" name="password" onChange={handleChange} placeholder="password" />
							</Form.Group>

							<Button variant="primary" className="text-light w-50 m-auto mt-3" type="submit">
								{submitting ? "Please wait..." : "Login"}
							</Button>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
