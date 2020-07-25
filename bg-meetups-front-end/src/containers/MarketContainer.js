import React from 'react';
import Market from '../components/Market';
import { useSelector } from 'react-redux';
import PacmanLoader from "react-spinners/PacmanLoader";

const MarketContainer = () => {
    const boardgames = useSelector(state => state.user.boardgames)
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
