'use strict';
import { StyleSheet } from 'react-native';
import { brown, green, mainBackground, tan } from '../../styles/color';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: mainBackground,
      width: '100%',
      paddingTop: 150
    },
    viewContainer: {
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: tan,
    },
    tagContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      padding: 10,
    },
    tagText: {
      color: green,
      fontSize: 16,
      fontWeight: 'bold',
    },
    link: {
      color: brown,
      fontSize: 16,
      marginLeft: 5,
      fontWeight: 'bold',
    }
  })

