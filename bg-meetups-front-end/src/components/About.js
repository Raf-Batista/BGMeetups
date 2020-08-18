import React from 'react'

const About = () => {
    return (
        <div className='container my-5 about'>
            <span>Hi, I'm Rafael Batista and this is my personal dream project. BGMeetups will be an application where you can play boardgames virtually due to the pandemic without needing multiple copies of a game or any other hassle. This app will start out with basic features but will expand over time. It's just me working on this so this project has and will take time to get to where I envsion it to be. Below you'll find a list changes or features I am working on currently and then a list of the major features planned for the future.</span>

            <h3 className='mt-5'>Current Changes / Features</h3>
            <ul className='mt-3 list-group list-group-flush'>
                <li className='mt-3 list-group-item'>
                    <h4>Change Design of Messages</h4>
                </li>
                <li className='mt-2 list-group-item'>
                    <h4>Users can delete their messages</h4>
                </li>
                <li className='mt-2 list-group-item'>
                    <h4>Users can reply to received messages</h4>
                </li>
            </ul>

            <h3 className='mt-5'>Future changes / Features</h3>
            <ul className='mt-3 list-group list-group-flush'>
                <li className='mt-3 list-group-item'>
                    <h4>MarketPlace Functionality</h4>
                    <div className='mt-2'>I may decide to drop this feature. BGG has a marketplace where people sell board games and if you want new games then there are plenty of awesome choices. Coolstuffinc, the BGG store, and MinMarket are my personal choices</div>
                </li>
                <li className='mt-2 list-group-item'>
                    <h4>Web Camera Functionality</h4>
                    <div>This is the feature that started the idea of this application. The idea is to be able to play games virtually with members of your group with only one person needing to own the game</div>
                </li>
            </ul>
        </div>
    )
}

export default About
