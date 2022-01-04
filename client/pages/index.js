import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Branding from '../components/card_branding/Branding';
import Content from '../components/Content/Content';
import {  useSelector } from 'react-redux';
import Admin from '../components/admin/Admin';

export default function Home() {

  const user = useSelector(state => state.userLogin);
  const { userInfo } = user;
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() =>{  
    setMounted(true)
  }, [])

    React.useEffect(() => {
        if(!userInfo){
        window.location.href = '/login';
      }
    } 
    , [userInfo]);
 
  return (        
    
    <div>
      {mounted && userInfo && userInfo.userData.admin == true ?
           
              <Admin />
           
            :
            <>
                <Jumbotron/>
                <Branding/>
                <Content/>
            </>
      }
    </div>  
  )
}

