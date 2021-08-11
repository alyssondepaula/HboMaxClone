import styled from 'styled-components/native';

export const Container = styled.View`
 padding-bottom: 10px;
 margin: 6px;
`;

export const ImageMovie = styled.Image.attrs(props=>({
  source: props.img,
  resizeMode: 'cover'
}))`
width: ${props=>props.width || 180}px;
height: ${props=>props.height || 280}px;
`;
