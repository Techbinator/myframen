import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import MyPhotos from './components/pages/myphotos';
import Inspiration from './components/pages/inspiration';
import FooterTabLayout from './components/layout/sub/footer';


const RouterWithRedux = connect()(Router);

const RouterComponent = () => {
  StatusBar.setBarStyle('light-content', true);
  return (
    <RouterWithRedux hideNavBar>
      <Scene key="tabBar" tabs tabBarStyle={style.tabBarStyle}>
        <Scene key="Inspiration" component={Inspiration} title="Inspiration" icon={FooterTabLayout} />
        <Scene key="Favorites" component={MyPhotos} title="Favorites" icon={FooterTabLayout} />
        <Scene key="MyPhotos" component={MyPhotos} title="My photos" icon={FooterTabLayout} initial />
        <Scene key="Playlist" component={Inspiration} title="Playlist" icon={FooterTabLayout} />
        <Scene key="Chats" component={Inspiration} title="Chats" icon={FooterTabLayout} />
      </Scene>
    </RouterWithRedux>
  );
};
let style = {
  tabBarStyle: {
    borderTopWidth: 0.5,
    borderColor: '#b7b7b7',
    backgroundColor: '#2B2B2B',
    opacity: 1
  }
};

export default RouterComponent;
