import axios from "axios";
import React from "react";
import { useEffect } from "react";

function Clients() {
	const [users, setUsers] = React.useState([]);

	useEffect(() => {
		axios({
			method: "get",
			url: "http://localhost:3000/users",
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		})
			.then(({ data }) => {
				setUsers(data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="clientdiv">
			<table className="client-table">
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
				{users.map((user) => (
					<tr key={user.email}>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</table>
		</div>
	);
}

export default Clients;
