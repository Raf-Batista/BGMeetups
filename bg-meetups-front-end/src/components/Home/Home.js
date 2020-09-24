import React from "react";
// import bg1 from "../assets/images/bg1.jpg";
// import bg2 from "../assets/images/bg2.jpg";
// import bg3 from "../assets/images/bg3.jpg";
// import bg4 from "../assets/images/bg4.jpg";
// import bg5 from "../assets/images/bg5.jpg";

const Home = () => {
  return (
    <div className='container my-5 about'>
      <span>Hi, I'm Rafael Batista and this is my personal dream project. BGMeetups will be an application where you can play boardgames virtually due to the pandemic without needing multiple copies of a game or any other hassle. This app will start out with basic features but will expand over time. The goal is to be able to activte Mecatol Rex virtually Below you will find a list of planned major features/updates.</span>

      <small className='d-block mt-3'>This site uses cookies for authentication and authorization. This is a work in progress so just use a fake email. There is no email system set up yet. No emails will ever be visible on the front end, the back end will handle everything email related.</small>

      <h3 className='mt-5'>Planned Features</h3>
      <ul className='mt-3 list-group list-group-flush'>

        <li className='mt-2 list-group-item'>
          <h4>Create a Meetup</h4>
          <div>This feature will allow a user to create a meetup at a certain date or time. All user's who are a part of that group will receive a notification as well as an option to accept or deny the meetup.</div>
        </li>
        <li className='mt-2 list-group-item'>
          <h4>Zoom Integration</h4>
          <div>Zoom will be integrated for groups to use to play virtually.</div>
        </li>
        <li className='mt-2 list-group-item'>
          <h4>Email System</h4>
          <div>Once the application has enough features to function I will implement an email system with verification, etc.</div>
        </li>
        <li className='mt-3 list-group-item'>
          <h4>Third Pary Login</h4>
          <div className='mt-2'>As of now you can not log into BGMeetups using third parties. The links are there as placeholders.</div>
        </li>
        <li className='mt-3 list-group-item'>
          <h4>Suggestions / Bug Report</h4>
          <div className='mt-2'>I plan on setting up a system to send suggestions and report a bug. Only verified emails will be accepted.</div>
        </li>
        <li className='mt-3 list-group-item'>
          <h4>Group Privacy, Reputation System, and Friends List</h4>
          <div className='mt-2'>You will be able to set a group to Private user's can not request an invite. A user's reputation lowers if they miss a meetup along with other factors. A user's reputation will not change for missing a </div>
        </li>
        <li className='mt-3 list-group-item'>
          <h4>MarketPlace Functionality</h4>
          <div className='mt-2'>I plan on setting up a Math Trade system based on region. Whenever someone puts up a game in your region that you want and you have a game they want, you will be notified via a message.</div>
        </li>
      </ul>
    </div>
  );
};

export default Home;
