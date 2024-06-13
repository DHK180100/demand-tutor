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
          Class 1
        </li>
        <li>
          <img src={signal_png} />
          Class 2
        </li>
        <li>
          <img src={signal_png} />
          Class 3
        </li>
        <li>
          <img src={signal_png} />
          Class 4
        </li>
        <li>
          <img src={signal_png} />
          Class 5
        </li>
        <li>
          <img src={signal_png} />
          Class 6
        </li>
        <li>
          <img src={signal_png} />
          Class 7
        </li>
        <li>
          <img src={signal_png} />
          Class 8
        </li>
        <li>
          <img src={signal_png} />
          Class 9
        </li>
        <li>
          <img src={signal_png} />
          Class 10
        </li>
        <li>
          <img src={signal_png} />
          Class 11
        </li>
        <li>
          <img src={signal_png} />
          Class 12
        </li>
        <li>
          <img src={signal_png} />
          Class 12
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
