import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const Upload = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Upload</Text>
      <Link style={styles.title} href="/">Back Home</Link>
    </View>
  )
}

export default Upload

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e45fd275',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 20,
        borderBottomWidth: 3,
    },
})