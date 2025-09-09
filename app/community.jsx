import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Community = () => {
  return (
    <View>
      <Text>My Community</Text>
    </View>
  )
}

export default Community

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