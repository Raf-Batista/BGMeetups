import React from 'react';
import './GroupSearchForm.css';

const GroupSearchForm = (props) => {
    const { handleChange } = props;
    
    return (
        <div className='container mt-5 text-center'>
            <div className="heading">
                <h2 className="d-block my-3">Groups</h2>
                <span>Search through a list of all board game groups</span>
            </div>
            <div className='d-inline'>
                <form className=' d-inline'>
                    <input type='text' name='query' placeholder="Search" onChange={handleChange} className='pl-2 my-2' />
                </form>
            </div>
        </div>
    )
}

export default GroupSearchForm
