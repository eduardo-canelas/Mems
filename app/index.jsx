import { StyleSheet, Text, View, Image } from 'react-native'
import { Link, Tabs } from 'expo-router'
//Image Below
import Logo from '../assets/undraw_online-gallery_dljd.png'

const Home = () => {
  return (
      <View style={styles.container}>
          <Image source={Logo} style={styles.image} />
          
          <Text style={[styles.title, styles.card]}>Home</Text>

          <View style={[styles.card]}>
            <Text style ={styles.title}>Card</Text>
          </View>
          <Link href= "/gallery" style={[styles.link, styles.title, styles.card]}>gallery Page</Link>
          <Link href="/upload" style={[styles.link, styles.card, styles.title]}>Upload Page</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        boxShadowColor: '#000'
    },
    card: {
        padding: 20,
        borderRadius: 30,
        boxShadowColor: '#000',
        marginTop: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 400,
        height: 300,
        borderRadius: 100,
        marginBottom: 50,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})