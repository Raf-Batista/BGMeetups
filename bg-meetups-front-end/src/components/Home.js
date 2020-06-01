import React from "react";
import Signup from "./Signup";

const Home = () => {
  return (
    <div>
      <div className='text-center my-5'>
        <h1>Welcome to Board Game Meetups</h1>
        <p className='h3'>Here you can create groups and invite people. Create meetups and play board games virtually through a web cam</p>
      </div>
      <Signup />
    </div>
  );
};

export default Home;
