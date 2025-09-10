import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors"

const Gallery = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <View style={[styles.container, { color: theme.background }]}>
            <Text style={[styles.title, styles.card,{color: theme.text, backgroundColor: theme.primary }]}>Your Gallery</Text>
            <Link href="/" style={[styles.link, styles.title, { color: theme.text }]}>Back Home</Link>
        </View>
    )
}

export default Gallery

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
    },
    link: {
        marginVertical: 100,
    },
    card: {
        padding: 30,
        borderRadius: 100,
        marginTop: 1,
        marginBottom: 350,
        marginLeft: 30,
        marginRight: 30,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})