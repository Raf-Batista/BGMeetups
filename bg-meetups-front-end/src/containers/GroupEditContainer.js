import React, { useState } from "react";

const GroupEditContainer = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <ul className="nav justify-content-center my-4">
        <li className="nav-item">
          <div
            className={`nav-link pointer ${active ? "active" : ""}`}
            onClick={handleClick}
          >
            My Market Games
          </div>
        </li>
        <li className="nav-item">
          <span
            className={`nav-link pointer ${!active ? "active" : ""}`}
            onClick={handleClick}
          >
            Sell A Game
          </span>
        </li>
      </ul>
    </div>
  );
};

export default GroupEditContainer;
