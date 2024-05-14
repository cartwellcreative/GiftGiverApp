import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { brown, cream } from '../styles/color'

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
    backgroundColor: brown,
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: cream,
    fontSize: 16,
    fontWeight: 'bold',
  }
})