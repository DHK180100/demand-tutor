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
            Toán
          </Link>
        </li>
        <li>
          <Link to="/LyTeacher">
            <img src={signal_png} alt="Signal" />
            Lý
          </Link>
        </li>
        <li>
          <Link to="/HoaTeacher">
            <img src={signal_png} alt="Signal" />
            Hóa
          </Link>
        </li>
        <li>
          <Link to="/SuTeacher">
            <img src={signal_png} alt="Signal" />
            Sử
          </Link>
        </li>
        <li>
          <Link to="/VanTeacher">
            <img src={signal_png} alt="Signal" />
            Văn
          </Link>
        </li>
        <li>
          <Link to="/DiaTeacher">
            <img src={signal_png} alt="Signal" />
            Địa
          </Link>
        </li>
        <li>
          <Link to="/AnhTeacher">
            <img src={signal_png} alt="Signal" />
            Anh
          </Link>
        </li>
        <li>
          <Link to="/OtherTeacher">
            <img src={signal_png} alt="Signal" />
            Other
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
