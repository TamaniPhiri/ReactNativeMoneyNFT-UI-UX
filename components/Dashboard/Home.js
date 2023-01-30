import { View, Text } from 'react-native'
import React from 'react'
import Profile from '../HomeTabs/Profile';
import Settings from '../HomeTabs/Settings';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer= createDrawerNavigator();

const Home = ({navigation}) => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile}/>
        <Drawer.Screen name="Settings" component={Settings}/>
    </Drawer.Navigator>
  )
}

export default Home;