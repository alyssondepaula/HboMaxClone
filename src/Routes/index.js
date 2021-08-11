import React from 'react';
import { View } from 'react-native';
import { useAuthContext } from '../context/Auth';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

// import { Container } from './styles';



const Routes = () => {
 
  const { logged } = useAuthContext();

   return logged ? <AppRoutes/> : <AuthRoutes/>
}

export default Routes;