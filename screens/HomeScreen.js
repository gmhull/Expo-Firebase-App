import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../config/firebaseConfig'

export const HomeScreen = ({navigation}) => {

  const handleSignOut = () => {
    auth.signOut()
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}>Profile Page</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
     button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutline: {
      backgroundColor: "white",
      marginTop: 5,
      borderColor: "#0782F9",
      borderWidth: 2,
    },
    buttonOutlineText: {
      color: "#0782F9",
      fontWeight: "700",
      fontSize: 16,
    },
  })