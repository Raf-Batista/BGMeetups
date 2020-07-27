import React, { useEffect } from 'react';
import Market from '../components/Market';
import { useSelector } from 'react-redux';
import PacmanLoader from "react-spinners/PacmanLoader";

const MarketContainer = () => {
    const users = useSelector(state => state.users);

    const getBoardgames = (users) => {
        const boardgames = [];
        users.forEach((user) => {
            if(!!user.boardgames.length) boardgames.push(user.boardgames);
        })
        return boardgames;
    }
    
    const boardgames = getBoardgames(users).flat(1)
    return (
        <div>
             {
                boardgames ? 
                    boardgames.map((boardgame) => <Market boardgame={boardgame} key={boardgame.id}/>) :  
                    <div className="spinner">
                         <PacmanLoader color={"#7d3cff"} />
                    </div>
            } 
        </div>
    )
}

export default MarketContainer
