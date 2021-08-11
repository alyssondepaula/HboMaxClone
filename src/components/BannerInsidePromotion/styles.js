import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.Image.attrs(props=>({
  source: props.img,
  resizeMode: 'contain'
}))`
  width: 100%;
`;


export const TextTitle = styled.Text`
 
  font-weight: 700;
  font-size: 24px;
  color: #fff;
`;

export const TextButton = styled.Text`
 
  font-weight: 700;
  font-size: 20px;
  color: #fff;
`;

export const TextDescription = styled.Text`

  font-weight: 100;
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-top: 8px;
  width: 90%;
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  margin-top: 14px;
  height: ${windowHeight*0.07}px;
  background-color: #bb54f7;
  border-color: #bb54f7;
  align-self: center;
  border-radius: 60px ;
  align-items: center;
  justify-content: center;
`;