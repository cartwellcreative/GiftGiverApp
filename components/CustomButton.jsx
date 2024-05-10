import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { brownText, creamText } from '../styles/color'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isloading}) => {
  return (
    <TouchableOpacity
     style={styles.button} 
     onPress={handlePress}
     activeOpacity={.7}
     classname={`${isloading ? 'opacity-50' : ''}`}
     disabled={isloading} >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: brownText,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  text: {
    color: creamText,
    fontSize: 16,
    fontWeight: 'bold',
  }
})