import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProfile from '../../components/profile/CardProfile';

function Profile() {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin)

    const { userInfo } = userLogin;

    console.log(userInfo);
    return (
        <div  style={{marginTop : '50px' }} >
            {userInfo ?
            <div>
                <CardProfile 
                    username={userInfo.userData.username} 
                    email={userInfo.userData.email} 
                    phone={userInfo.userData.phone} 
                    address={userInfo.userData.address} 
                    image={'null'}
                />
            </div>
            :
            <p>loading...</p>
            }
        </div>
    )
}

export default Profile;
