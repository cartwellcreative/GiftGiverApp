//rnfes
import { ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import styles from './styles';

//add image with logo at the top

const Signin = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const sumbitForm = () => {
    // alert('Opps! This feature is not available yet.  Please try again later.')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <Text style={styles.loginText}>Sign In to Present</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={{ marginTop: 7 }}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={{ marginTop: 25 }}
          />
          <CustomButton
            title="Sign In"
            handlePress={sumbitForm}
            containerStyles={{ marginTop: 7 }}
            isloading={isSubmitting}
          />
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>Don't have an account?</Text>
            <Link style={styles.link} href={'/sign-up'}>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signin;
