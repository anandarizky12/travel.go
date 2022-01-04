import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Profile from '../../components/profile';

function MainProfile() {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin)
    const [mounted, setMounted] = React.useState(false)
  
    React.useEffect(() =>{  
      setMounted(true)
    }, [])
    const { userInfo } = userLogin;

 
    return (
        <div  style={{marginTop : '5px' }} >
            {mounted && userInfo ?
            <div>
                <Profile 
                  user={userInfo.userData}
                />
            </div>
            :
            <p>loading...</p>
            }
        </div>
    )
}

export default MainProfile;
