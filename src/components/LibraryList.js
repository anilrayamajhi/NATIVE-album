import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {

  componentWillMount () {
    const dataSrc = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = dataSrc.cloneWithRows(this.props.libraries)
  }

renderRow(library) {
  return <ListItem library={library}/>
}

  render () {
    return(
      <ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}/>
    )

  }
}

const mapStateToProps = (state) => {
  return {libraries: state.techData}
}

export default connect(mapStateToProps)(LibraryList)
