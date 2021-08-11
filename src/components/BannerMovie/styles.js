import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.ImageBackground.attrs(props=>({
   source: props.img,
   blurRadius: props.blur,
   onLoadEnd: props.onEnd,
   resizeMode: 'cover'
}))`
  width: ${windowWidth}px;
  height: ${props => props.height*windowHeight}px;
  background-color: blue;
  align-self: center;
`;

export const Overlay = styled(LinearGradient)`
  flex: 1;
`;

export const ImageLogo = styled.Image.attrs(props=>({
  source: props.imgLogo,
  blurRadius: props.blur,
  resizeMode: 'contain'
}))`
 width:200px;
 height: 100px;
 align-self: center;
 bottom: 20px;
 position: absolute;
 justify-content: flex-end;
`;
