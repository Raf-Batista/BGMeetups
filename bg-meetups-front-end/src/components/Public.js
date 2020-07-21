import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchEditUser from '../async_actions/fetchEditUser.js';  

const Public = (props) => {
    const {history, user} = props
    const [showEditForm, setShowEditForm] = useState(false);
    const [userForm, setUserForm] = useState({username: '', imagePreview: ''});
    const [avatar, setAvatar] = useState(null)
    const dispatch = useDispatch();

    const handleClick = () => {
        setShowEditForm(!showEditForm)
    };

    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        });
    };

    const handleImageUpload = (e) => {
        const uploadedAvatar = e.target.files[0];
        setAvatar(uploadedAvatar);
        setUserForm({...userForm, imagePreview: URL.createObjectURL(uploadedAvatar)});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let updatedUser = {}
        updatedUser.id = user.id
        if(userForm.username) updatedUser.username = userForm.username;
        if(avatar) updatedUser.avatar = avatar;
        dispatch(fetchEditUser(updatedUser));
        setUserForm({username: '', imagePreview: ''}); 
        setAvatar(null);
        setShowEditForm(!showEditForm)

        /**
           formData.append('title', this.state.title);
    formData.append('body', this.state.body);
    formData.append('featured_image', this.state.featured_image);
         */
    };

    const form = <form onSubmit={handleSubmit}>
    <div className='form-group'>
        <div>
            <img src={user.avatar} alt="avatar" style={{width:'128px', height:'128px'}} className='mb-3' />
        </div>
        <div>
            <input name='avatar' onChange={handleImageUpload} type='file' className='img-form' accept="image/png, image/jpeg" filename={userForm.username}/>
            <small className='d-block mt-2'>JPG or PNG only. 1 MB max.</small>
            <img src={userForm.imagePreview} style={{width:'128px', height:'128px'}} />
        </div>
        <div>
            <label htmlFor='username' className='d-block my-2'>Username</label>
            <input name='username' onChange={handleChange} type='text' placeholder={user.username} value={userForm.username} />
        </div>
        <div>
          <button className=' d-inline mx-2 mt-2 border-0 bg-transparent' type='submit'>Save</button>
          <button className=' d-inline border-0 bg-transparent' onClick={handleClick}>Cancel</button>
        </div>
    </div>
</form>

    const publicInfo = <div>
        <div>
          <img src={user.avatar} alt="avatar" style={{width:'128px', height:'128px'}} className='mb-3'/>
        </div>
       <div>
        <span className='d-block'>Username</span>
          <span className='mt-1'>{user.username}</span>
        </div>
        <button className='border-0 bg-transparent mt-1' onClick={handleClick}>Edit</button>
        <div className=''>Manage My Created Groups</div>
        <div>View Joined Groups</div>
    </div>

    return (
        <div >
          <span className='d-block mb-3'>Profile Avatar</span>
          {showEditForm ? form : publicInfo}
        </div>
    )
}

export default Public
