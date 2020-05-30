import React from 'react'

const Signup = () => {
    return (
        <div className='container w-25 mt-3'>
            <h1>Signup</h1>
            <form>
                <div className='form-group'>
                    <input className='form-control mt-2' type='text' placeholder='username'/>
                    <input className='form-control mt-2' type='password' placeholder='password'/>
                    <button className='btn btn-primary mt-2'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
