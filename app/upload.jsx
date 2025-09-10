import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { Colors } from "../constants/Colors"
const Upload = () => {

  const colorScheme = useColorScheme();
  
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[styles.container, {color: theme.background}]}>
          <Text style={[styles.title, {color: theme.text}]}>Upload</Text>
      <Link style={[styles.title, {color: theme.text}]} href="/">Back Home</Link>
    </View>
  )
}

export default Upload

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 20,
    },
})