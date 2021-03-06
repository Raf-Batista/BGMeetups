import React, { useEffect } from "react";
import Market from "../MarketView/MarketView.js";
import { useSelector } from "react-redux";

const MarketContainer = () => {
  const users = useSelector((state) => state.users);

  const getBoardgames = (users) => {
    const boardgames = [];
    try {
      users.forEach((user) => {
        if (!!user.boardgames.length) boardgames.push(user.boardgames);
      });
      return boardgames.flat(1);
    } catch (error) {
      console.log(error);
    }
  };

  const boardgames = getBoardgames(users);

  return (
    <div>
      {boardgames.length ? (
        boardgames.map((boardgame) => <Market boardgame={boardgame} />)
      ) : (
        <div className=" mt-5 text-center">It's Quiet... Too Quiet...</div>
      )}
    </div>
  );
};

export default MarketContainer;
