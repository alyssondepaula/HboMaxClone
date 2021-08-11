import React from 'react';
import { Alert, StatusBar, View } from 'react-native';
import BannerMovie from '../../../components/BannerMovie';
import bannerAccount from '../../../assets/images/bannerAccount.png'
import Feather from 'react-native-vector-icons/Feather';
import { Container, Button, Text, TextTitle, TextDescription, HeaderAccountAction, ImageLogo, ImageWrap } from './styles';
import Header from '../../../components/Header/Index';


const GooglePayServiceErrorFake = () => {

    Alert.alert(
        'Não foi possível verificar a sua assinatura',
        'Não conseguimos encontrar a sua assinatura na Google Play',
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
}

const FreeAccount = () => {
  return <Container>
      <BannerMovie Banner={bannerAccount} Height={0.40}>
      <Header>
      
      <HeaderAccountAction onPress={()=> Alert.alert('Settings')}>
      <Feather name="settings" color={'#fff'} size={24}/>
      </HeaderAccountAction>
     
      <ImageLogo/>
        
      </Header>
      
      </BannerMovie>
      

     
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 48}}>
      <TextTitle textColor={'#fff'}>Aproveite a HBO Max UiClone!</TextTitle>
      <TextDescription textColor={'#fff'}>
          Conheça personagens icônicos e descubra 
          novas histórias e títulos exclusivos. 
      
          Assine e teste grátis por 7 dias.
      </TextDescription>
      <Button backgroundColor={'#5B1CE5'} borderColor={'#ffffff00'} onPress={()=>{Alert.alert('Escolher um Plano')}}>
      <Text textColor={'#fff'}>ESCOLHA UM PLANO</Text>
      </Button>
      <Button backgroundColor={'#ffffff00'} borderColor={'#fff'} onPress={()=>GooglePayServiceErrorFake()}>
      <Text textColor={'#fff'}>RESTAURAR COMPRA</Text>
      </Button>

      <Button backgroundColor={'#ffffff00'} borderColor={'#ffffff00'} onPress={()=>{Alert.alert('Login')}}>
      <Text textColor={'#9B86D3'}>ENTRAR NA CONTA</Text>
      </Button>
      </View>
  <StatusBar barStyle='light-content' backgroundColor='#000'/>
  </Container>;
}

export default FreeAccount;