import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import default_1920x1080 from '../../assets/images/default_1920x1080.png'
import LinearGradient from 'react-native-linear-gradient';


export const Container = styled.ImageBackground.attrs({
    source: default_1920x1080,
    resizeMode: 'stretch',
})`
  flex: 1;
  z-index: 0;
 
`;
