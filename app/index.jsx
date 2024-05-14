import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { mainBackground, green, brown } from '../styles/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import { images } from "../constants";
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';




export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View>
                    <View style={styles.page}>
                        <View style={styles.logo}>
                            <Ionicons name="gift-sharp" size={30} color={green} />
                            <Text>
                                <Text style={styles.logoText}>Present</Text>
                            </Text>
                        </View>
                        <View className="relative mt-5">
                            <Text style={styles.centerText}>
                                Gift Giving Made{"\n"}
                                Easy with{" "}
                                <Text style={{ color: green }}>Present</Text>
                            </Text>
                                <Image
                                    source={images.path}
                                    className="w-[145px] h-[15px] absolute -bottom-2 -right-1"
                                    resizeMode="contain"
                                />
                            
                        </View>

                        <Text style={styles.tagText}>
                            All of your gift ideas in{"\n"}one convienient place.
                        </Text>

                        <CustomButton title="Sign Up or Login" handlePress={()=> router.push('/sign-in')}/>
                    </View>
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style="light" />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    page: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        color: green,
        fontSize: 30,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerText: {
        color: brown,
        fontSize: 40,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150,
    },
    tagText: {
        color: green,
        fontSize: 20,
        fontStyle: 'italic',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
});