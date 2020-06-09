import React from "react";

function data_body({ users }) {
    return (
        <tbody>
            {users.map(({ login, name, picture, phone, email, dob }) => {
                return (


                <tr key={login.uuid}>
                    <td>date-th="Image" classname="align-middle"</td>
                    <img src={picture.medium} />
                    <td> {name.first} {name.last}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{dob.date}</td>
                </tr>
                );
            })
        }
        </tbody>
    );
}

export default data_body;