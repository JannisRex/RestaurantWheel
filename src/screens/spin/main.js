import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
})

class SpinScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> abc </Text>
      </View>
    )
  }
}


export default SpinScreen
