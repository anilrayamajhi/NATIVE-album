import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
 }
 from 'react-native'
import { CardItem } from './common'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ListItem extends Component {
componentWillUpdate (nextProps, nextState) {
    LayoutAnimation.spring()
}


  //note: used mapStateToProps using own props to determine if the specifc techdata id was selected and if it should be expanded
    renderDescription(){
      const {library, expanded} = this.props
      if(expanded) {
        return (
          <CardItem>
            <Text style={{flex: 1}}>
              {library.description}
              </Text>
          </CardItem>
        )
      }
    }

  render () {
    const { titleStyle } = styles
    const {id, title } = this.props.library


    return (
      <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id)}>
        <View>
          <CardItem>
            <Text style={titleStyle}>{title}</Text>
          </CardItem>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.techSelectionId === ownProps.library.id
  return { expanded }
}
export default connect(mapStateToProps, actions)(ListItem)
//note:
// first argument in connect is for mapStateToProps
// second argument is to bind action creators  to the component.
// passing in actions which will become props in component
