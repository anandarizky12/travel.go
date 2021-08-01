import React from 'react';
import {  makeStyles } from '@material-ui/core';
import Jumbotron from '../compoenents/jumbotron/Jumbotron';
import Card from '../compoenents/card/Card';
export default function Home() {
  return (
    <div style={{marginTop : '40px' }} >
      <Jumbotron/>
      <Card/>
    </div>
  )
}
