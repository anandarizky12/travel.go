import React from 'react';
import {  makeStyles } from '@material-ui/core';
import Jumbotron from '../compoenents/jumbotron/Jumbotron';
import Branding from '../compoenents/card_branding/Branding';
import Content from '../compoenents/Content/Content';

export default function Home() {
  return (
    <div style={{marginTop : '40px' }} >
      <Jumbotron/>
      <Branding/>
      <Content/>
    </div>
  )
}
