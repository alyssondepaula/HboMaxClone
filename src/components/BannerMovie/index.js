import React from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container, ImageLogo, Overlay } from './styles';

const BannerMovie = ({ Banner, children, Height, Logo, homeText, changedWord }) => {

  const [blur, setBlur] = useState(60)

  return <Container 
  img={Banner} 
  blur={blur}
  height={Height}
  onEnd={()=>{setBlur(0)}}
 
  >
      <Overlay 
      start={{x: 0, y: 0}} end={{x: 0.25, y: 1}}
      colors={['rgba(255, 255, 255, 0)', '#0F0F0F']}>
        {children}

        <Text style={{position: 'absolute', 
        bottom: 0,color: '#fff', 
        alignSelf: 'center',
        textAlign: 'center',
        width: 300
        }}>{homeText}</Text>
        <ImageLogo imgLogo={Logo}/>
     </Overlay>
  </Container>;
}

export default BannerMovie;