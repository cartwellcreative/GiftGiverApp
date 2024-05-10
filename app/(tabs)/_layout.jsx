import { Text, View } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { mainBackground, navBarActiveIconColor, navBarBackground, navBarBackgrounf, navBarInactiveIconColor } from '../../styles/color';


//want to bring this into it's own layout because these screens will not have the navigation bar that the others do

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: navBarActiveIconColor,
          tabBarInactiveTintColor: navBarInactiveIconColor,
          tabBarStyle: {
            backgroundColor: navBarBackground,
            borderTopWidth: 0,
            shadowOffset: { width: 0, height: 0 },
            shadowColor: 'black',
            shadowOpacity: 0.1,
            elevation: 1
          }
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name="home" size={24} color={color} />
            )
          }} />
        <Tabs.Screen
          name="shop"
          options={{
            title: 'Shop',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="cart-shopping" size={24} color={color}/>
            )
          }}
        />
        <Tabs.Screen
          name="planner"
          options={{
            title: 'Planner',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="list-check" size={24} color={color}/>
            )
          }} />
        <Tabs.Screen
          name="my_lists"
          options={{
            title: 'My Lists',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="list" size={24} color={color}/>
            )
          }} />
           <Tabs.Screen
          name="more"
          options={{
            title: 'More',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="ellipsis" size={24} color={color}/>
            )
          }} />
      </Tabs>
    </>
  )
}

export default TabsLayout

