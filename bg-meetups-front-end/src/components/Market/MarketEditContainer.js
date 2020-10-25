import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MarketEdit from "./MarketEdit";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const MarketEditContainer = (props) => {
  const [active, setActive] = useState(true);
  const { history } = props;
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (JSON.stringify(user) === "{}") {
      history.push("/account");
      toast.error("You Shall Not Pass!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  });

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="container text-center mt-5">
      <div className="heading">
        <h2 className="d-block my-3">My Marketplace</h2>
        <span>
          View and edit your posts in the marketplace or create a new post to
          sell a game
        </span>
      </div>
      <ul className="nav justify-content-center mt-4 div-background py-2">
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
      {active ? null : <MarketEdit />}
    </div>
  );
};

export default MarketEditContainer;
