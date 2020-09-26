import React from 'react';
import Private from '../Private';
import Public from '../Public';
import './AccountView.css';

const AccountView = (props) => {
    const {handleClick, active, setActive, user} = props;
    return (
        <div className="container text-center mt-5">
            <div className="heading">
                <h2 className="d-block my-3">Account Management</h2>
                <span>Update and manage your BGMeetups account</span>
            </div>

            <ul className="nav justify-content-center mt-4 div-background py-2">
                <li className="nav-item">
                    <div
                        className={`nav-link pointer ${active ? "active" : ""}`}
                        onClick={handleClick}
                    >
                        Account
            </div>
                </li>
                <li className="nav-item">
                    <span
                        className={`nav-link pointer ${!active ? "active" : ""}`}
                        onClick={handleClick}
                    >
                        Public Profile
            </span>
                </li>
            </ul>

            {active ? (
                <Private user={user} history={props.history} />
            ) : (
                    <Public user={user} />
                )}
        </div>
    )
}

export default AccountView
