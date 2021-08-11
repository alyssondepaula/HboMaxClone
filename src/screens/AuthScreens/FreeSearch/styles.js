import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  align-self: center;
  padding-top: 1000px;
`;

export const Search = styled.View`
  width: ${windowWidth*0.90}px;
  height: 50px;
  z-index: 11;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #191919;
  padding-left: 20px;
  border-radius: 4px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  justify-content: center;
  padding-left: 10px;
  color: #606060;
`;

export const TextTitle = styled.Text`
  padding-left: 2.5%;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  margin-bottom: 12px;
`;
