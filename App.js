//import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/context/Auth';
import Routes from './src/Routes';

export default function App() {

  return (
          
    <NavigationContainer>
         <AuthProvider>
           <Routes/>
         </AuthProvider>
    </NavigationContainer>

  );
}
