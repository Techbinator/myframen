import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { StatusBar } from 'react-native';
import MyPhotos from './components/pages/myphotos';

import { connect } from 'react-redux';

const RouterWithRedux = connect()(Router);


const RouterComponent = () => {
  StatusBar.setBarStyle('light-content', true);
  return (
    <RouterWithRedux hideNavBar>
      <Scene key="main">
        <Scene key="MyPhotos" component={MyPhotos} title="My photos" initial />
      </Scene>
    </RouterWithRedux>
  );
};


export default RouterComponent;
