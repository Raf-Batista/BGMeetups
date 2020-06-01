import React from "react";
import Signup from "./Signup";

const Home = () => {
  return (
    <div>
      <div className='text-center mt-5'>
        <h1>Welcome to Board Game Meetups</h1>
        <p className='h3 mt-3'>Here you can create groups and invite people. Create meetups and play board games virtually through a web cam.<br /> You can also search for info on boardgames and find buyers and sellers looking to sell their board games.</p>
      </div>
      <Signup />
    </div>
  );
};

export default Home;
