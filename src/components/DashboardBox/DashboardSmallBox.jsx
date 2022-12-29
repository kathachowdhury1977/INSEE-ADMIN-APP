import React, { useState } from "react";
import "./DashboardSmallBox.scss";

function DashboardSmallBox(props) {
    const [inputType] = useState(props.type);
    const [inputValue, setInputValue] = useState("");


    return (
        <>
            <div className="dashboard_sectionBox">
                <div className="row w-100">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-sm-8 col-lg-8 col-md-8">
                                <div className="row">
                                    <div className="col-sm-3 col-lg-3 col-md-3 styleIcon">
                                        <i class={props.faClass} aria-hidden="true"></i>
                                    </div>
                                    <div className="col-sm-9 col-lg-9 col-md-9">
                                        <p className="BlueText">{props.totalnumber}</p>
                                        <p className="BlackText">{props.label}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-4 col-md-4 leftLine">
                                <p className="lightText">H - 20</p>
                                <p className="lightText">M - 20</p>
                                <p className="lightText">L - 20</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DashboardSmallBox;