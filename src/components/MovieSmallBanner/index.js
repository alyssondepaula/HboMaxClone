import React from 'react';
import { Text } from 'react-native';
import { Container, ImageMovie } from './styles';

const MovieSmallBanner = ({img, isAssigned, width, height}) => {
  return <Container >
    <ImageMovie img={img} width={width} height={height}/>
    { isAssigned ? <Text style={{color:'#fff'}}>HBO</Text> : null}
    </Container>;
}

export default MovieSmallBanner;