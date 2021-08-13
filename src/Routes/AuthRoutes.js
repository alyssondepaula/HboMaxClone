import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Feather from 'react-native-vector-icons/Feather';

import FreeHome from '../screens/AuthScreens/FreeHome';
import FreeAccount from '../screens/AuthScreens/FreeAccount';
import FreeSearch from '../screens/AuthScreens/FreeSearch';

import CustomDrawer from '../components/Drawer';


const Drawer = createDrawerNavigator();
function HomeDrawer() {

  


  return (
    <Drawer.Navigator 
    backBehavior='none' 
    defaultStatus='closed' 
    drawerContent={CustomDrawer}
    
    screenOptions={{
      headerShown: false,
      drawerType: 'front',
      swipeEnabled: false,
      overlayColor: 'transparent',
    
    }}
    
    >
        <Drawer.Screen name="hgg" component={FreeHome} />
      <Drawer.Screen name="Home" component={FreeHome} />
    </Drawer.Navigator>
  );
}




const Tab = createBottomTabNavigator();
const AuthRoutes = () => {



  return (
      <Tab.Navigator initialRouteName='FreeHome' backBehavior='none' screenOptions={{
        tabBarShowLabel: false,
        headerShown:false,
        tabBarStyle: {
          backgroundColor: '#181818',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60
        },
        tabBarActiveTintColor: '#938CB3',
        tabBarInactiveTintColor: '#ffffff'
      }
      }>
        <Tab.Screen 
        name="FreeHome"  
        component={HomeDrawer} 
        options={{

          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
        
        
        />
        <Tab.Screen 
        name="FreeSearch" 
        component={FreeSearch} 
        options={{

          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
        
        />
        <Tab.Screen 
        name="FreeAccount" 
        component={FreeAccount} 
        options={{

          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}        
        
        />
      </Tab.Navigator>
  );
}

export default AuthRoutes;