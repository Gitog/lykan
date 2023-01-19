import axios from "axios";
import React from "react";
import { useEffect } from "react";

function Clients() {

  useEffect(()=>{
    axios({
      method: "get",
      url: "http://localhost:3000/users",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [])

	return (
		<div className="clientdiv">
			<table className="client-table">
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Address</th>
				</tr>
				<tr>
					<td>James Njorio</td>
					<td>jamesnjorio@gmail.com</td>
					<td>Kiambu</td>
				</tr>
			</table>
		</div>
	);
}

export default Clients;
