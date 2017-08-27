import React, { Component } from 'react'
import {View } from 'react-native'
import firebase from 'firebase'

import {Header, Button, CardItem} from './common'
import AlbumList from './AlbumList'

class Albums extends Component {
  render() {
    return (
      <View style={ {flex: 1} }>
        <CardItem>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardItem>
        <AlbumList />
      </View>
          );
        }
      }

      export default Albums
