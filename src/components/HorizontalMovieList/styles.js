import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View.attrs({
  
})`
  width:100%;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 1px;
  background-color: ${props=>props.backgroundColor || 'transparent'};
`;

export const TextTitle = styled.Text`
 
  font-weight: 700;
  font-size: 18px;
  color: #fff;
`;

export const TextDescription = styled.Text`

  font-weight: 100;
  font-size: 15px;
  color: #fff;
`;

export const TextButton = styled.Text`
 
  font-weight: 700;
  font-size: 18px;
  color: #fff;
`;
