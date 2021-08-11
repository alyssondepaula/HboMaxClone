import React from 'react';

import { Container } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const BackgroundGradient = ({children, paddingTop}) => {
  return ( 
  
  <Container>
    {children}
  </Container>
  );

}

export default BackgroundGradient;