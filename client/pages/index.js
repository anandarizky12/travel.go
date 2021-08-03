import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Branding from '../components/card_branding/Branding';
import Content from '../components/Content/Content';

export default function Home() {

  return (  
    <div style={{marginTop : '40px' }} >
      <Jumbotron/>
      <Branding/>
      <Content/>
    </div>
  )
}
