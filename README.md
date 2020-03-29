**BGMeetups** is an application being built with React/Redux and Rails that allows users to create or join a group to play board games virtually. 

![](guitar-lists.png)

Submitted by: **Rafael Batista**


## Live Demo 

## User Stories
\
The following functionality is complete:

* [] Non registered user see the 3 latest meetups 
* [] Give visitor an option to signup 
* [] User can create groups and invite other users
* [] Give a user the option to accept or decline an invite
* [] User can view groups and post to grpup the user is a part of
* [] Group owner can create a meet up 
* [] Users can vote on the meet up
* [] Users can vote to praise or issue a warning on another group member 
* [] Group members can vote to close the group 
* [] Group members can vote to kick group member

The following **additional** features are implemented:

- [ ] User can upload an avatar.
- [ ] User can login and sign up through Facebook.

## Installation

To use this app, clone the repo. You need to install dependencies in the bg-meetups-back-end and g-meetups-front-end directory There are also tests you can run.

Set up server:
```sh
cd bg-meetups=back-end
bundle install 
rspec
rails s
```

Set up client
```sh
cd bg-meetups-front-end
npm test
npm install
```