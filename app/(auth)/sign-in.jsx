//rnfes
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { creamText, mainBackground, tanText } from '../../styles/color'
import FormField from '../../components/FormField'

//add image with logo at the top

const Signin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View>
          <Text style={styles.loginText}>Log into Present</Text>
          <FormField title="Email" value="Email" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackground,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: tanText,
  }
})