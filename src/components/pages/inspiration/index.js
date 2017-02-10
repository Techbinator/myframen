import React, { Component } from 'react';
import { Header, InputGroup, Input, Icon, Button, Spinner, View } from 'native-base';
import { Text } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { MessageBar,MessageBarManager } from 'react-native-message-bar';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Layout from '../../layout';
import Swipe from '../../common/swipe';
import { playlistAddPhoto } from '../../../actions';

class Inspiration extends Component {

  state = {
    images: [],
    selectedPlaylist: 0,
    searchedTerm: '',
    spinner: false,
  }

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    // Remove the alert located on this master page from the manager
    MessageBarManager.unregisterMessageBar();
  }

  handleYup(image){
    const selectedDataId = this.props.playlists[this.state.selectedPlaylist].id;
    this.props.playlistAddPhoto(selectedDataId, image.uri);
  }

  selectPlaylist(entry){
    this.setState({ 'selectedPlaylist': entry });
  }

  getImages(){
    this.setState({spinner: true});
    axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        q: this.state.searchedTerm + ' photography',
        cx: '014044310802109305825:bb15ep8ewuw',
        key: 'AIzaSyBBasDYCd1nwiM-x72YBo0GDQrEnyY6xn8',
        searchType:'image',
        alt:'json',
        safe:'high',
        fileType:'jpg',
        //ImgSize:'huge' just in case
      }
    })
    .then( (response) => {
      const items = response.data.items;

      if( _.isEmpty(items)){
        MessageBarManager.showAlert({
          title: 'Error',
          message: 'No results',
          alertType: 'warning',
        });
        this.setState({spinner: false, images: filteredItems});
        return;
      }

      const filteredItems = _.map(items, function(value, key) {
        value.uri = value.link;
        delete value.link;
        return value;
      });

      this.setState({spinner: false, images: filteredItems});
    })
    .catch( (error) => {
      MessageBarManager.showAlert({
        title: 'Error',
        message: 'An error apeared while searching please try again',
        alertType: 'warning',
      });
      this.setState({spinner: false, images: filteredItems});
    });
  }

  onSearch(term){

    if(this.state.searchedTerm.length < 3){
      MessageBarManager.showAlert({
        title: 'Error',
        message: 'Please enter a search term with more than 3 characters',
        alertType: 'warning',
      });
      return;
    }
    this.getImages.call(this)

  }


  getContent(){

    if ( this.state.spinner) {
      return (
        <View style={styles.center}>
          <Spinner color="#ff8900" />
        </View>
        );
    }  else if(_.isEmpty(this.props.playlists)){
      return (
        <Layout>
          <View style={styles.spinnerContainer}>
            <Button bordered warning block onPress={() => Actions.NewPlaylist()}>
                <Icon name='ios-images-outline' />
                <Text style={{color: '#ffffff'}}>Create a playlist first</Text>
            </Button>
          </View>
        </Layout>
        );
    } else if(_.isEmpty(this.state.images)) {
      return (
        <Layout>
          <View style={styles.center}>
            <Text style={{color: '#6b6b6b'}}>Please search images ...</Text>
          </View>
        </Layout>
      )
    } else {
      return (<Swipe tabLabel='Swipe'
        images={this.state.images}
        playlists={this.props.playlists}
        handleYup={this.handleYup.bind(this)}
        selectPlaylist={this.selectPlaylist.bind(this)}
      />
     )
    }
  }

  render() {
    return (
        <Layout>
          <Header searchBar rounded>
              <InputGroup>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" onChangeText={ searchedTerm => this.setState({searchedTerm: searchedTerm }) } />
                  <Icon name="ios-people" />
              </InputGroup>
              <Button transparent onPress={this.onSearch.bind(this)}>
                  Search
              </Button>
          </Header>
          <MessageBar ref="alert" />
          {this.getContent.call(this)}
        </Layout>
    );
  }
}

Inspiration.defaultProps = {
  playlists: []
};

export default connect(
  state => ({
    playlists: _.orderBy(state.Playlists.playlists, ['id'], ['desc'])
  }),
  {
    playlistAddPhoto
  }
)(Inspiration);

const styles = {
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
