import React from "react";
import "./Box.scss";

function Box(props) {

    return (
        <>
            <div className={props.class}>
                <div className="card box">
                    <span>{props.number}</span>
                    <p>{props.title}</p>
                </div>
            </div>
        </>
    );
}

export default Box;
