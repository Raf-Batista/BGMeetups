import React from 'react'

const Member = (props) => {
    const { member } = props;
    return (
        <div className='mt-3'>
            <span>{member}</span>
        </div>
    )
}

export default Member
