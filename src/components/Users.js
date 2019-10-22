import React from "react";
import { Card } from "react-bootstrap";
export const Users = props => {
	return (
		<Card className="mt-5" style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={`https://joeschmoe.io/api/v1/${props.name}`}
				className="avatar-size"
			/>
			<Card.Body>
				<Card.Title>
					<h4 className="text-center">{props.name}</h4>
				</Card.Title>
				<Card.Text className="text-center">{props.work}</Card.Text>
			</Card.Body>
		</Card>
	);
};
export default Users;
