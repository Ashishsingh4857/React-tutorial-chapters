import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
	const { user } = useContext(UserContext);

	return (
		<>
			<div className="border p-4 w-1/4 mx-auto my-5">
				<h1 className="text-xl font-bold text-center">
					Profile
				</h1>
				<p className="text-center">
					Welcome, {user ? user : "admin"}
				</p>
			</div>
		</>
	);
}

export default Profile;
