import React from "react";

const card = (prop) => {
	console.log(prop.user.name);
	// let { name, email, phone, address } = prop.user;
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>User Name:</th>
						<th>User phone:</th>
						<th>User Email:</th>
						<th>User Address:</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{prop.user.name}</td>
						<td>{prop.user.email}</td>
						<td>{prop.user.phone}</td>
						<td>{prop.user.address}</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default card;
