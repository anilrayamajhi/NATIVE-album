import React, { Component } from 'react'
import ReactNative, { ScrollView, Text, View } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
 constructor (props) {
   super(props)
   this.state = {albums: []}
 }

  componentWillMount() {
    console.log('loading')
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        this.setState({albums: response.data})
        console.log(this.state);
      })
      .catch(() => {
        console.log("Error in albums")
      })
  }

  renderAlbums(){
    return this.state.albums.map((album) => {
      return(
          <AlbumDetail key={album.title } album={album}/>
      )
    })
  }
  render () {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList

