import _ from 'lodash'
import React, { Component } from 'react'
import {  View } from 'react-native'
import { Card, CardItem, Button } from './common'
import { connect } from 'react-redux'
import { artistUpdate, artistCreate } from '../actions'
import ArtistForm from './ArtistForm'

// clear data passed into CWM to clear data on create artist form because prop data does not clear out when selecting a user and then clicking add. This fixes that issue
const clearData = { name: '', phone: '', genre: 'Rock'}

class ArtistCreate extends Component {

  componentWillMount(){
    _.each(clearData, (value, prop) => {
      this.props.artistUpdate({ prop, value });
    });
  }

  OnButtonPress() {
    const {name, phone, genre } = this.props
    this.props.artistCreate({name, phone, genre: genre || 'Rock' })
  }

  render () {
    console.log('Artistprops', this.props.artist)
    return (
      <Card>
        <ArtistForm {...this.props}/>
        <CardItem>
          <Button onPress={this.OnButtonPress.bind(this)}>Create</Button>
        </CardItem>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, genre } = state.artistForm
  return {name, phone, genre }
}

export default connect(mapStateToProps, {artistUpdate, artistCreate})(ArtistCreate)
