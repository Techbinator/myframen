import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MyPhotos from './components/pages/myphotos';
import Layout from './components/layout';

const RouterComponent = () => {
  return (
    <Router hideNavBar sceneStyle={{ paddingTop: 65 }}>
      <Scene key="main" component={Layout}>
        <Scene key="MyPhotos" component={MyPhotos} title="My photos" initial />
      </Scene>
    </Router>
  );
};


export default RouterComponent;
