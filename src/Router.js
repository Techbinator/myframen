import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import MyPhotos from './components/pages/myphotos';
import Inspiration from './components/pages/inspiration';
import Favorites from './components/pages/favorites';
import Playlist from './components/pages/playlist';
import newPlaylist from './components/pages/playlist/sub/newplaylist';
import FooterTabLayout from './components/layout/sub/footer';


const RouterWithRedux = connect()(Router);

const RouterComponent = () => {
  StatusBar.setBarStyle('light-content', true);
  return (
    <RouterWithRedux hideNavBar>
      <Scene key="tabBar" tabs tabBarStyle={styles.tabBarStyle}>
        <Scene key="Inspiration" component={Inspiration} title="Inspiration" icon={FooterTabLayout} />
        <Scene key="Favorites" component={Favorites} title="Favorites" icon={FooterTabLayout} />
        <Scene key="MyPhotos" component={MyPhotos} initial title="My photos" icon={FooterTabLayout} />
        <Scene key="PlaylistHolder" title="Playlist" icon={FooterTabLayout} barButtonIconStyle={{ tintColor: '#FF8900' }}>
          <Scene
            key="Playlists"
            component={Playlist}
            title="Playlists"
            icon={FooterTabLayout}
            initial
            hideNavBar={false}
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.titleStyle}
            onRight={() => Actions.NewPlaylist()}
            rightTitle="Add"
            rightButtonTextStyle={styles.rightButton}
          />
          <Scene
            key="NewPlaylist"
            component={newPlaylist}
            title="Playlist name"
            icon={FooterTabLayout}
            hideNavBar={false}
            rightButtonTextStyle={styles.rightButton}
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.titleStyle}
          />
        </Scene>
      </Scene>
    </RouterWithRedux>
  );
};
let styles = {
  tabBarStyle: {
    borderTopWidth: 0.5,
    borderColor: '#b7b7b7',
    backgroundColor: '#2B2B2B',
    opacity: 1
  },
  navigationBarStyle: {
    backgroundColor: '#2B2B2B',
    borderColor: '#b7b7b7'
  },
  titleStyle: {
    color: '#6b6b6b',
  },
  rightButton: {
    color: '#FF8900',
  }
};

export default RouterComponent;
