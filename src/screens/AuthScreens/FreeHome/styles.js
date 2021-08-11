import styled from 'styled-components/native';
import  Animated  from 'react-native-reanimated';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
`;

export const HeaderHomeAction = styled.TouchableOpacity`
  
  width: ${windowHeight*0.05}px;
  height: ${windowHeight*0.05}px;
  border-radius: ${windowHeight*0.04}px;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 101;
  top:  ${windowHeight*0.03}px;
  left:  ${windowHeight*0.03}px;
  right: 0;


`;


