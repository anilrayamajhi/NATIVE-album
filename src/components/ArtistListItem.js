import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { CardItem } from './common'
import { Actions } from 'react-native-router-flux'

class ArtistListItem extends Component {

  //prop added to Actions method from router-flux to pass in specific artist to render on artist form
  onRowPress(){
    Actions.artistEdit({artist: this.props.artist})
  }

  render () {
    const { name } = this.props.artist
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardItem>
            <Text style={styles.titleStyle}> {name} </Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}


export default ArtistListItem
