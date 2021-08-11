
import React, {useEffect} from 'react';
import { View, Animated } from 'react-native';
import Header from '../Header/Index';
import { HeaderDrawerAction } from './styles';
import Feather from 'react-native-vector-icons/Feather';


// ...


// import { Container } from './styles';

const CustomDrawer = ({ navigation }) => {




    return (
      <Animated.View style={{  backgroundColor: '#191919',flex: 1 }}>
        <Header>
        <HeaderDrawerAction>
   <Feather name="x"
   color={'#8401CC'} size={24}
   style={{alignSelf: 'center', zIndex: 102}}
   onPress={()=>navigation.toggleDrawer()}
   
   />
   </HeaderDrawerAction>
        </Header>
      </Animated.View>
    );
}

export default CustomDrawer;