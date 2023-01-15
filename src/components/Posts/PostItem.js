import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function PostItem({ index, id, image, title, excerpt, rating }) {
	return (
		<Card key={index} style={{ height: "350px", width: "280px" }} className="p-0 border-0">
			<Link to={"/booking/" + id} className="text-decoration-none text-dark">
				<div>
					<Card.Img variant="top" src={image} width={150} height={200} style={{ objectFit: "cover" }} />

					<Card.Title dangerouslySetInnerHTML={{ __html: title }} />
				</div>
				<Card.Body className="p-0">
					<Card.Text dangerouslySetInnerHTML={{ __html: excerpt }} />
					<div className="d-flex justify-content-between">
						<Button variant="primary">Book now</Button>
						<div className="d-flex row w-50">
							<span className="text-center">Rating:</span>
							<span className="text-center">{rating} / 5</span>
						</div>
					</div>
				</Card.Body>
			</Link>
		</Card>
	);
}

export default PostItem;
