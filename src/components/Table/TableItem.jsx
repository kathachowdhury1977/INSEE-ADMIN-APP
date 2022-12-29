import React from "react";

function TableItem(props) {

    return (
        <>
                    <tr>
                        <td>{props.machineId}</td>
                        <td>{props.date} <br /> {props.time}</td>
                        <td>{props.vibration}</td>
                        <td>{props.status}</td>
                    </tr>
                    
        </>
    );
}

export default TableItem;
