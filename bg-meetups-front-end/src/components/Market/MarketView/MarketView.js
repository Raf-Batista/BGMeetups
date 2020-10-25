import React from "react";

const MarketView = (props) => {
  const {boardgame} = props;
  return( 
    <div className='container text-center my-4'>
      <div className=''>{boardgame.name}</div>
      <div>{boardgame.description}</div>
      <div>{boardgame.price}</div>
      <button className='btn'>Contact Seller</button>
    </div>
  )};

export default MarketView;
