import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setLogout } from '../Redux/Action/ProductAction';

const Profile = () => {
    const profile  = useSelector(state=>state.profile.payload);
    const dispatch = useDispatch();
    return (
        <div className="container profile">
            <div className="row">
                <div className="col-md-4 profile-box">
                    <h4>{profile.fullname}</h4>
                    <h4>{profile.email}</h4>
                    <button onClick={()=>dispatch(setLogout())}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
