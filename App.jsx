import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import AppNavigation from './src/navigations/AppNavigation'

export default class App extends Component {
  render() {
    return (
      <>
        <AppNavigation />
      </>
    )
  }
}

const styles = StyleSheet.create({})