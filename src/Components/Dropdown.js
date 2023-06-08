import React from "react";
import Dropd from "./Dropdown.css"
export default function Dropdown() {
    return (
        <>
       <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/">India <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">Mali     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">Baden     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">Nepal     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">New Zealand     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">Brazil     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">Canada     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">Pakistan     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">China     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">Colombia     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">Denmark     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">Russia     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">Singapore     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">France     <input type="checkbox"/></a></li>
    <li><a className="dropdown-item" href="/">Switzerland      <input type="checkbox"/></a></li>
  </ul>
</div>
        
        
        </>
    );
}
