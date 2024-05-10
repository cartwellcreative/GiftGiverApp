import { Text, View } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';


//want to bring this into it's own layout because these screens will not have the navigation bar that the others do

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>

  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: true,
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name="home" size={24} color="black" />
            )
          }} />
        <Tabs.Screen
          name="shop"
          options={{
            title: 'Shop',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="cart-shopping" size={24} color="black" />
            )
          }}
        />
        <Tabs.Screen
          name="planner"
          options={{
            title: 'Planner',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="list-check" size={24} color="black" />
            )
          }} />
        <Tabs.Screen
          name="my_lists"
          options={{
            title: 'My Lists',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="list" size={24} color="black" />
            )
          }} />
           <Tabs.Screen
          name="more"
          options={{
            title: 'More',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="ellipsis" size={24} color="black" />
            )
          }} />
      </Tabs>
    </>
  )
}

export default TabsLayout

