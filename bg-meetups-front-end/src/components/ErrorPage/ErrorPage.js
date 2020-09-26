import React from 'react'

const ErrorPage = (props) => {
    const { history } = props;
    
    const handleClick = () => {
        history.goBack();
    };

    return (
        <div className="container text-center mt-5">
            <div>
                The page you reqeuested is not found
            </div>
            <div className="mt-3">
                Click here to go back
            </div>
            <div className="mt-3">
                <button className="small-btn" onClick={handleClick}>Go Back</button>
            </div>
        </div>
    )
}

export default ErrorPage
