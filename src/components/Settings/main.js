import React, { Component } from 'react'
import { Dimensions, View, Text } from 'react-native'
import { Slider, ButtonGroup, CheckBox } from 'react-native-elements'
import styles from './styles'

const selectableButtons = ['Option A', 'Option B', 'Option C']
const deviceWidth = (Math.round(Dimensions.get('window').width)) - 35

class Settings extends Component {
  constructor() {
    super()

    this.state = {
      sliderValue: 0,
      selectedButton: 1,
      isAChecked: false,
      isBChecked: false,
      isCChecked: false
    }
  }

  render() {
    return (
      <View styles={{ flex: 1 }}>
        <View styles={styles.container}><Text styles={{ textAlign: 'center' }}>Filter Restauraunts etc.</Text></View>

        {/* Rendering Slider */}
        <View styles={[styles.container, { alignItems: 'stretch' }]}>
          <Slider value={this.state.sliderValue}
            onValueChange={sliderValue => this.setState({ sliderValue })} />
          <Text style={{ textAlign: 'center' }}>{Number(this.state.sliderValue).toFixed(2)}</Text>
        </View>


        {/* Rendering ButtonGroup */}
        <View styles={styles.container}>
          <ButtonGroup
            onPress={selectedButton => this.setState({ selectedButton })}
            selectedIndex={this.state.selectedButton}
            buttons={selectableButtons}
            containerStyle={{ width: deviceWidth }}
          />
        </View>


        {/* Rendering CheckBoxes */}
        <View styles={[styles.container, { flexDirection: 'column' }]}>
        <>
          <CheckBox
            title='A'
            checked={this.state.isAChecked}
            onPress={() => this.setState({ isAChecked: !this.state.isAChecked })} />
          <CheckBox
            center
            title='B'
            checked={this.state.isBChecked}
            onPress={() => this.setState({ isBChecked: !this.state.isBChecked })} />
            <CheckBox
              right
              title='C'
              checked={this.state.isCChecked}
              onPress={() => this.setState({ isCChecked: !this.state.isCChecked })} />
          </>
        </View>
      </View>
    )
  }
}

export default Settings
