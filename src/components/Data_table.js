import React from "react";
import Data_body from "./Data_body";
import "../styles/DataTable.css";

function DataTable({headings,users,handleSort}){
    return (
        <div>
            <table
                id="table"
            >
                <thead>
                    <tr>
                        {headings.map(({name, width})=>{
                            return(
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width}}
                                    onClick={() => {
                                        handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <Data_body users={users} />
            </table>
        </div>
    );
}

export default Data_table;