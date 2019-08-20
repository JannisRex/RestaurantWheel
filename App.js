// @flow
import React, { Component } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MainTabNavigator from './src/navigation/navigator/MainTabNavigator'

type Props = {}

type State = {
  isLoading: boolean
}

export default class App extends Component<Props, State> {
  constructor() {
    super()

    this.state = {
      isLoading: true
    }
  }

 _loadResourcesAsync = async () => {
   await Promise.all([
     Font.loadAsync({
       impact: require('./src/assets/font/impact.ttf'),
       lato_lightitalic: require('./src/assets/font/Lato-LightItalic.ttf'),
       lato_hairline: require('./src/assets/font/Lato-Hairline.ttf'),
       Menlo: require('./src/assets/font/Menlo-Regular.ttf')
     })
   ])
 }

 _handleLoadingError = error => {
   console.log(error)
 }

 _handleFinishLoading = () => {
   this.setState({ isLoading: false })
 }

 render() {
   const { isLoading } = this.state

   return (isLoading ?
     <AppLoading
       startAsync={this._loadResourcesAsync}
       onError={this._handleLoadingError}
       onFinish={this._handleFinishLoading}
     /> : <MainTabNavigator />
   )
 }
}


