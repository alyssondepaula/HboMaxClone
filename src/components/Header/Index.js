import React, {useRef} from 'react';
import { Alert, Animated, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Container, HeaderHomeAction } from './styles';


const Header = ({navigation, animValue, children}) => {

  const scrollY = useRef(new Animated.Value(0)).current;

  console.log(animValue)

  return ( 
  <Container >
   {children}
<Animated.View
   
   style={[
    styles.header,
    {
      
      opacity: animValue != undefined ? animValue.interpolate({
        inputRange:[0, 120],
        outputRange: [0, 1],
        extrapolate: 'clamp'
      }) : 0,

      
     
    }
   ]
   }
   
   
   >
     
   </Animated.View>


   
   </Container>
  
  
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'rgba(19,19,19,0.95)',
    width: '100%',
    height: '100%',
    position: 'absolute'
 

  }
});

export default Header;