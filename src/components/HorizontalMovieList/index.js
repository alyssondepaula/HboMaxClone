import React from 'react';
import { Alert, FlatList, View } from 'react-native';
import { Text } from '../../screens/AuthScreens/FreeAccount/styles';
import MovieSmallBanner from '../MovieSmallBanner';

import { Container, TextTitle, TextDescription } from './styles';


const HorizontalMovieList = ({ title, description, list, backgroundColor, width, height }) => {

    const arrayMovie = list;

    const Item = ({ item }) => (
          
         
        <MovieSmallBanner 
        img={item.img} 
        isAssigned={item.isAssigned} 
        width={width} 
        height={height}/>
        
 );

    const renderItem = ({ item }) => (

   //     Alert.alert(item.name)
     //   <View style={{width: 100, height: 100, backgroundColor: '#121212', margin: 10}}></View>
       <Item item={item} />
      );


  return <Container 

  backgroundColor={backgroundColor}
  >
     {   title       ? <TextTitle>{title}</TextTitle> : null}
     {   description ? <TextDescription>{description}</TextDescription> : null}
      <FlatList
        
        data={list}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
       
        contentContainerStyle={{alignSelf: 'center'}}


      
      
      
      />
  </Container>;
}

export default HorizontalMovieList;