import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync(); // prevent the splash screen from hiding before asset loading is complete


const RouteLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
      if(error) throw error;
      if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if(!fontsLoaded && !error) return null;

  return (
    <Stack>
        <Stack.Screen name="index" options={ {headerShown: false} }/>
        <Stack.Screen name="(auth)" options={ {headerShown: false} }/>
        <Stack.Screen name="(tabs)" options={ {headerShown: false} }/>
        <Stack.Screen name="search/[query]" options={ {headerShown: false} }/>
    </Stack>
  )
}

export default RouteLayout