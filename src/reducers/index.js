import { combineReducers } from 'redux';
import Playlists from './Playlists';
import routes from './Routes';
import Layout from './Layout';

export default combineReducers({
  Playlists,
  routes,
  Layout,
});
