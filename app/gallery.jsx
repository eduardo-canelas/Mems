import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors"

const Gallery = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <View style={[styles.container, { backgroundColor: theme.notification }, styles.card]}>
            <Text style={styles.title}>Gallery Page</Text>
            <Link href="/" style = {[styles.link, styles.title]}>Back Home</Link>
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
        borderBottomWidth: 3,
    },
    card: {
        backgroundColor: '#e45fd275',
        padding: 1,
        borderRadius: 100,
        boxShadowColor: '#000',
        marginTop: 80,
        marginBottom: 100,
        marginLeft: 30,
        marginRight: 30,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})