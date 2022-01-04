import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Branding from '../components/card_branding/Branding';
import Content from '../components/Content/Content';
import { useDispatch, useSelector } from 'react-redux';
import Admin from '../components/admin/Admin';

export default function Home() {

  const user = useSelector(state => state.userLogin);
  const { userInfo } = user;


    React.useEffect(() => {
        if(!userInfo){
        window.location.href = '/login';
      }
    } 
    , [userInfo]);
 
  return (        
 
    <div style={{ marginTop : '5px' }} >
     
     {userInfo ?
        userInfo.userData.admin == true ?
          <div >
            <Admin />
          </div>
          :
          <div>
              <Jumbotron/>
              <Branding/>
              <Content/>
          </div>
     : 
     <p>Loading</p>
     }
    
    </div>  
  )
}

