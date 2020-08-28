import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import createInvitation from '../async_actions/createInvitation';

const InvitationForm = (props) => {
    const { userId, groupId, history } = props;

    const [inviteForm, setInviteForm] = useState({recipient: '', user_id: userId, group_id: groupId});

    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setInviteForm({...inviteForm, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createInvitation(inviteForm));
        setInviteForm({...inviteForm, recipient: ''})
    }

    const handleCancel = (e) => {
        e.preventDefault();
        console.log('Cancel')
    };

    return (
        <form className='form-group mt-4 mx-lg-auto ml-sm-4' onSubmit={handleSubmit}>
            <label className="d-block my-2">Username</label>
            <input
                name="recipient"
                type="text"
                onChange={handleChange}
                value={inviteForm.recipient}
            />
            <div className='mt-2'>
              <button className='mr-2'>Invite</button>
              <button onClick={handleCancel} >Cancel</button>
            </div>
        </form>

    )
}

export default InvitationForm
