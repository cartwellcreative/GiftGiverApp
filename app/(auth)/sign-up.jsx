import { ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import styles from './styles';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const sumbitForm = () => {
    alert('Opps! This feature is not available yet.  Please try again later.')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <Text style={styles.loginText}>Sign Up For An Account</Text>
          <FormField
            title="Name"
            value={form.name}
            handleChangeText={(e) => setForm({ ...form, name: e })}
            otherStyles={{ marginTop: 7 }}
          />
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
            title="Sign Up"
            handlePress={sumbitForm}
            containerStyles={{ marginTop: 7 }}
            isloading={isSubmitting}
          />
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>Already have an account?</Text>
            <Link style={styles.link} href={'sign-in'}>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp;
