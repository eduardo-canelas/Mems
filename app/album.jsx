import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Album = () => {
  return (
    <View style={styles.container}>
      <Text>Album</Text>
    </View>
  )
}

export default Album

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7b3e9ff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#a23eeaff',
  },
})