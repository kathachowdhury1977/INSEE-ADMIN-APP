import React from "react";
import TableItem from "./TableItem";

function Table(props) {

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Machine Id</th>
                        <th>Time</th>
                        <th>Vibration</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <TableItem
                        machineId="100"
                        date="24/12/2020"
                        time="10:30"
                        vibration="100 hz"
                        status="Green" />

                    <TableItem
                        machineId="101"
                        date="26/12/2020"
                        time="10:30"
                        vibration="100 hz"
                        status="Pending" />

                    <TableItem
                        machineId="102"
                        date="27/12/2020"
                        time="10:30"
                        vibration="100 hz"
                        status="Approved" />
                </tbody>
            </table>
        </>
    );
}

export default Table;
