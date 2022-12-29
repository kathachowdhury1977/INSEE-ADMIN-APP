import React, { useState } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

function Navmenu(props) {
  const [FaIcon] = useState(props.faIcon);

  console.log(window.location.pathname, "#f64028#f64028")
  function openModal(event) {   
    if (props.openModal) props.openModal(true);
  }
  return (
    <>
      <li className={window.location.pathname === props.src ? "active treeview menu-open" : null}>
        <Link to={props.src} onClick ={openModal}>
          <i className={FaIcon}></i> <span>{props.label}</span>
          <span className="pull-right-container">
            <i className={props.classdropdown}></i>
          </span>
        </Link>
      </li>
    </>
  );
}
export default Navmenu;
