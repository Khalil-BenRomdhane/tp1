import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import List_Profile from '../Screens/HomeScreens/List_Profile';
import Myaccount from '../Screens/HomeScreens/Myaccount';
import Groupe from '../Screens/HomeScreens/Groupe'

const Tab = createMaterialBottomTabNavigator();
function Home() {
  return (
<Tab.Navigator>
    <Tab.Screen name='list_profile'  component={List_Profile}/>
    <Tab.Screen name='account' component={Myaccount}/>
    <Tab.Screen name='groupe' component={Groupe}/>
</Tab.Navigator>
  )
}
export default Home
