// @flow
import React, { Component } from 'react'
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
   await console.log('fetching API...')
 }

 _handleLoadingError = error => {
   console.log(error)
 }

 _handleFinishLoading = () => {
   this.setState({ isLoadingComplete: true })
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


