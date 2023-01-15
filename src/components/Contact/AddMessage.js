import axios from "axios";
import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BASE_URL, MEDIA_PATH, POSTS_PATH, COMMENTS_PATH } from "../../constants/api";

function AddMessage() {
	const { register, handleSubmit } = useForm();
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState();

	const onSubmit = async (inputs, event) => {
		const setValues = { post: 206 };
		const allInputs = { ...setValues, ...inputs };

		try {
			const response = await axios.post(BASE_URL + COMMENTS_PATH, allInputs, {});
			setSuccess(true);
		} catch (error) {
			console.log("error", error);
			setError(true);
			setErrorMsg(error);
		}
	};

	return (
		<>
			<Form className="d-flex flex-column align-items-center col-md-6" onSubmit={handleSubmit(onSubmit)}>
				<Form.Group className="mb-3 w-100" controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter name" {...register("author_name")} />
				</Form.Group>

				<Form.Group className="mb-3 w-100" controlId="fields.address">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter email" {...register("author_url")} />
				</Form.Group>

				<Form.Group className="mb-3 w-100" controlId="content">
					<Form.Label>Message</Form.Label>
					<InputGroup>
						<Form.Control as="textarea" aria-label="With textarea" {...register("content")} />
					</InputGroup>
				</Form.Group>
				{success === true && <p>You have successfully sent a message</p>}
				{error === true && <p>{errorMsg}</p>}

				<Button className="mt-3 w-50" variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
}

export default AddMessage;
