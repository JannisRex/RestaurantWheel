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

class CustomSpinScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> 123 </Text>
      </View>
    )
  }
}


export default CustomSpinScreen
