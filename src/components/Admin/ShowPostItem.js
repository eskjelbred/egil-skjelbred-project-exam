import React, { useState } from "react";
import Moment from "react-moment";

function ShowPostItem({ id, title, rating, status, price, excerpt, dateMod, address, dateAdded, image }) {
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	return (
		<tr key={id}>
			<td>{id}</td>
			<td>
				<img src={image} width={30} height={30} style={{ objectFit: "cover" }} />
			</td>
			<td dangerouslySetInnerHTML={{ __html: title }} />
			<td className="text-center">{address}</td>
			<td className="text-center">{rating} stars</td>
			<td className="text-center">
				<Moment format="D MMM YY">{dateAdded}</Moment>
			</td>
			<td className="text-center">
				<Moment fromNow className="d-block">
					{dateMod}
				</Moment>
				<Moment format="D MMM YY" className="d-block text-muted">
					{dateMod}
				</Moment>
			</td>
			<td className="text-center">{price} NOK</td>
			<td className="text-center">
				<span className="text-blue">Edit</span> <span className="text-red">Delete</span>
			</td>
		</tr>
	);
}

export default ShowPostItem;
