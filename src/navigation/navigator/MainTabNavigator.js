import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import TabBarIcon from '../../lib/TabBarIcon'
import SpinSwitchNavigatior from './SpinSwitchNavigatior'
import CustomSpinScreen from '../../screens/customSpin/main'
import theme from '../../config/theme.style'

const TabConfig = {
  tabBarOptions: {
    style: {
      backgroundColor: theme.COLOR_HEADER
    },
    activeBackgroundColor: theme.COLOR_BUTTON_DARK,
    inactiveBackgroundColor: theme.COLOR_HEADER,
    activeTintColor: theme.COLOR_IVORY,
    inactiveTintColor: theme.COLOR_BACKGROUND
  }
}

const BottomTabNavigator = createBottomTabNavigator({

  'Spin!': {
    screen: SpinSwitchNavigatior,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          class='MaterialIcons'
          focused={focused}
          name={'casino'} />
      )
    }
  },

  'Inspire': {
    screen: CustomSpinScreen,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          class='MaterialCommunityIcons'
          focused={focused}
          name='brain' />
      )
    }
  }
}, TabConfig)

export default createAppContainer(BottomTabNavigator)
