import React from 'react'

const Member = (props) => {
    const { member } = props;
    return (
        <div className='div-background p-2'>
            <span>{member}</span>
        </div>
    )
}

export default Member
