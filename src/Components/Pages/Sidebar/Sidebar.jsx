import React from "react";
import "./Sidebar.css";

import signal_png from "../../Assets/signal.png";

function Sidebar() {
  return (
    <div className="Sidebar">
      <h3>Subject</h3>
      <ul>
        <li>
          <img src={signal_png} />
          Toán
        </li>
        <li>
          <img src={signal_png} />
          Lý
        </li>
        <li>
          <img src={signal_png} />
          Hóa
        </li>
        <li>
          <img src={signal_png} />
          Sử
        </li>
        <li>
          <img src={signal_png} />
          Văn
        </li>
        <li>
          <img src={signal_png} />
          Địa
        </li>
        <li>
          <img src={signal_png} />
          Anh
        </li>
        <li>
          <img src={signal_png} />
          Other
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
