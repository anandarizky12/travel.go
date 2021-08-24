import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Branding from '../components/card_branding/Branding';
import Content from '../components/Content/Content';
import { useDispatch, useSelector } from 'react-redux';
import Admin from '../components/admin/Admin';

export default function Home() {
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.userLogin);
  const { userInfo } = user;

  console.log(userInfo)

  return (        
 
    <div style={{ marginTop : '40px' }} >
       {userInfo && userInfo.userData.admin !== true ? 
        <>
           <Jumbotron/>
           <Branding/>
           <Content/>
        </>
        :
            <Admin/> 
       }
       
    </div>  
  )
}
