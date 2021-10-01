import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Branding from '../components/card_branding/Branding';
import Content from '../components/Content/Content';
import { useDispatch, useSelector } from 'react-redux';
import Admin from '../components/admin/Admin';

export default function Home() {

  const user = useSelector(state => state.userLogin);
  const { userInfo } = user;

  return (        
 
    <div style={{ marginTop : '5px' }} >
       {!userInfo &&
               <div>
                  <Jumbotron/>
                  <Branding/>
                  <Content/>
               </div>
       }
       {userInfo && userInfo.userData.admin == true &&
             <Admin/> 
       }
       {userInfo && userInfo.userData.admin !== true &&
           <div>
              <Jumbotron/>
              <Branding/>
              <Content/>
           </div>
       }
    </div>  
  )
}
