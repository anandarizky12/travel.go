import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Profile() {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin)

    const { userInfo } = userLogin;

    console.log(userInfo);
    return (
        <div  style={{marginTop : '50px' }} >
            {userInfo ?
            <div>
                <p>{userInfo.userData.username}</p>
                <p>{userInfo.userData.email}</p>
            </div>
            :
            <p>Loading...</p>
            }
        </div>
    )
}

export default Profile;
