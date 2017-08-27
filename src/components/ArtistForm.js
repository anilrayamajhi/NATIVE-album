import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { CardItem, Input } from './common'
import { connect } from 'react-redux'
import { artistUpdate } from '../actions'

class ArtistForm extends Component {
  render () {
    return (
      <View>
        <CardItem>
          <Input
          label="Name"
          placeholder="Artist Name"
          value={this.props.name}
          onChangeText={(value) => this.props.artistUpdate({prop: 'name', value })}
          />
        </CardItem>

        <CardItem>
          <Input
          label="Phone"
          placeholder="555-555-5555"
          value={this.props.phone}
          onChangeText={(value) => this.props.artistUpdate({prop: 'phone', value })}
          />
        </CardItem>

        <CardItem style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>Genre</Text>
          <Picker
          selectedValue={this.props.genre}
          onValueChange={value => this.props.artistUpdate({prop: 'genre', value})}
          >
              <Picker.Item label="Rock" value="Rock" />
              <Picker.Item label="Country" value="Country" />
              <Picker.Item label="Folk" value="Folk" />
              <Picker.Item label="Pop" value="Pop" />
              <Picker.Item label="Clasical" value="Clasical" />
              <Picker.Item label="Rap" value="Rap" />
          </Picker>
        </CardItem>
      </View>
    )
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  const { name, phone, genre } = state.artistForm
  return {name, phone, genre }
}

export default connect(mapStateToProps, {artistUpdate})(ArtistForm)
