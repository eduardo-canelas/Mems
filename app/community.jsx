import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from "../constants/Colors"
const Community = () => {
  const colorScheme = useColorScheme();
  
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style ={[styles.title, { color: theme.text }]}>My Community</Text>
    </View>
  )
}

export default Community

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
  },
})