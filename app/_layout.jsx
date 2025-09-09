import { StyleSheet, Text, View, useColorScheme } from 'react-native'

import { Slot, Stack, Tabs } from 'expo-router'

import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {

    const colorScheme = useColorScheme();

    const theme = Colors[colorScheme] ?? Colors.light
    console.log(colorScheme);
    return (
        <>
            <StatusBar value = "auto"/>
            <Tabs screenOptions={{
                headerStyle: { backgroundColor: theme.background },
                headerTintColor: theme.primary,
                headerTitleStyle: { fontWeight: 'bold' },
            }}>
                <Tabs.Screen name="index" options={{ title: 'Home' }} />
                <Tabs.Screen name="gallery" options={{ title: 'Gallery' }} />
                <Tabs.Screen name="upload" options={{ title: 'Upload'}} />
                <Tabs.Screen name="album" options={{ title: 'Album' }} />
                <Tabs.Screen name="community" options={{ title: 'Community' }} />
            </Tabs>
        </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})