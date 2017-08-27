import React, { Component } from 'react'
import { Text, View, Modal } from 'react-native'
import { CardItem } from './CardItem'
import { Button } from './Button'

//note: onRequestClose is required by android so pass in empty fn because
//i dont need anything done when user closes modal

const Confirm =({children, visible, onAccept, onDecline}) => {
  const { containerStyle, textStyle, cardItemStyle } = styles

    return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() =>{}}
      >
        <View style={ containerStyle }>
          <CardItem style={cardItemStyle}>
            <Text style={textStyle}>
              {children}
            </Text>
          </CardItem>

          <CardItem>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </CardItem>
        </View>
      </Modal>

    )
}

const styles = {
  cardItemStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm }
