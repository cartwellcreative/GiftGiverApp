import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { brown, cream, green, tan } from '../styles/color';
import { FontAwesome6 } from '@expo/vector-icons';

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={{ padding: 10, otherStyles}}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.formBox}>
        <TextInput style={styles.formText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={tan}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />

    {title === "Password" && (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  {!showPassword && (
                    <FontAwesome6 name="eye"/>
                  )}
                  {showPassword && (
                    <FontAwesome6 name="eye-slash"/>
                  )}
              </TouchableOpacity>
            )}
          </View>
        </View>
      )
    }

export default FormField

const styles = StyleSheet.create({
    container: {
    }, 
    titleText:{
      fontSize: 16,
      color: brown,
      fontWeight: 'bold'
    },
    formBox: {
      height: 16,
      padding: 20,
      color: cream,
      backgroundColor: green,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      height: 40,
      flexDirection: 'row',
      width: '100%',
      marginTop: 5
    }, 
    formText: {
      flex: 1,
      fontSize: 16,
      color: cream
  }, 
  icons: {
    width: 6,
    height: 6
  }
})