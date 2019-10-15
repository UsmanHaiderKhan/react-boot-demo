import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Users } from "./Users";

export const Avatar = props => {
	const UsersList = [
		{
			id: "1",
			name: "Katerna",
			work: "Full Stack Developer"
		},
		{
			id: "2",
			name: "Salman Khan",
			work: ".Net Developer"
		},
		{
			id: "3",
			name: "Usman Haider Khan",
			work: "FrontEnd Developer"
		}
	];

	const usersdata = UsersList.map((avatarcard, i) => {
		return <Users key={i} id={UsersList[i].id} name={UsersList[i].name} work={UsersList[i].work} />;
	});
	return (
		<Container>
			<h1>WelCome To All the Users </h1>
			<div className="row">
				<div className="col-md-4">{usersdata}</div>
			</div>
		</Container>
	);
};
export default Avatar;
