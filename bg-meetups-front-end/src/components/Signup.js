import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='container text-center mt-3 signin'>
      <h2>Signin Below</h2>
      <div className='mb-2'>
        <button className=' btn btn-primary text-center'>
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size='lg'
            className='mr-2'
          />
          <span>Facebook</span>
        </button>
      </div>
      <div className='mb-2'>
        <button className='btn btn-success text-center'>
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size='lg'
            className='mr-2'
          />
          <span className=''>Twitter </span>
        </button>
      </div>
      <div className='mb-2'>
        <button className=' btn btn-warning text-center'>
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size='lg'
            className='mr-2'
          />
          <span>Google</span>
        </button>
      </div>
    </div>
  );
};

export default Signup;
