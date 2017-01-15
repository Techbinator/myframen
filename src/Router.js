import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import MyPhotos from './components/pages/myphotos';
import Inspiration from './components/pages/inspiration';


const RouterWithRedux = connect()(Router);
const RouterComponent = () => {
  StatusBar.setBarStyle('light-content', true);
  return (
    <RouterWithRedux hideNavBar>
      <Scene key="main">
        <Scene key="MyPhotos" component={MyPhotos} title="My photos" />
        <Scene key="Inspiration" component={Inspiration} title="Inspiration" initial />
      </Scene>
    </RouterWithRedux>
  );
};


export default RouterComponent;
