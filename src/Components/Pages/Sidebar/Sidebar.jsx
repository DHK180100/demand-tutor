import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import signal_png from "../../Assets/signal.png";

function Sidebar() {
  return (
    <div className="Sidebar">
      <h3>Subject</h3>
      <ul>
        <li>
          <Link to="/ToanTeacher">
            <img src={signal_png} alt="Signal" />
            Math
          </Link>
        </li>
        <li>
          <Link to="/LyTeacher">
            <img src={signal_png} alt="Signal" />
            Physic
          </Link>
        </li>
        <li>
          <Link to="/HoaTeacher">
            <img src={signal_png} alt="Signal" />
            Chemistry
          </Link>
        </li>
        <li>
          <Link to="/AnhTeacher">
            <img src={signal_png} alt="Signal" />
            English
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
