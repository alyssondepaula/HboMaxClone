import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import hbomaxLogo from '../../../assets/images/hbomaxLogo.png'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const Container = styled.View`
  flex: 1;
  background-color: #0F0F0F;
  flex-direction: column;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 15%;
  margin: 5px;
  background-color: ${props => props.backgroundColor};
  border: 2px;
  border-color: ${props => props.borderColor};
  align-self: center;
  border-radius: 60px ;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.textColor};
  align-self: center;
  
`;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.textColor};
  align-self: center;
 
`;

export const TextTitle = styled.Text`
  padding-left: 5%;
  font-weight: 700;
  font-size: 18px;
  color: ${props => props.textColor};
`;

export const TextDescription = styled.Text`
  padding-left: 5%;
  padding-right: 5%;
  font-weight: 100;
  font-size: 15px;
  color: ${props => props.textColor};
`;

export const HeaderAccount = styled.View`
  width:  ${windowWidth*1}px;
  height: ${windowHeight*0.10}px;
  z-index: 20;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5%;
`;

export const ImageLogo = styled.Image.attrs(props=>({
  source: hbomaxLogo,
  resizeMode: 'contain'
}))`
 width:150px;
 height: 100px;
 align-self: center;
`;



export const HeaderAccountAction = styled.TouchableOpacity`
  
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