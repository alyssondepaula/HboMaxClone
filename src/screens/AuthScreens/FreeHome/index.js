import React, {useEffect, useMemo, useRef, useState} from 'react';
import { FlatList, Text, View, Animated, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundGradient from '../../../components/BackgroundGradient';
import BannerMovie from '../../../components/BannerMovie';
import HorizontalMovieList from '../../../components/HorizontalMovieList';
import { Banners } from '../../../services/FakeServices/Banners';

import { ListMovies } from '../../../services/FakeServices/ListMovies';
import godvskonglogo from '../../../assets/images/godvskonglogo.png'
import Feather from 'react-native-vector-icons/Feather';


import {  HeaderHomeAction } from './styles';
import BannerInsidePromotion from '../../../components/BannerInsidePromotion';
import Header from '../../../components/Header/Index';

import { useDrawerStatus } from '@react-navigation/drawer';
import { HboBrands } from '../../../services/FakeServices/HboBrands';


const DATA = [

  {
    id: '01',
    render: () => <BannerMovie
    Banner={Banners[0].img} 
    Height={0.60} 
    Logo={godvskonglogo}
    homeText={'Filmes e séries, UEFA ChampionsLeague ao vivo ou conteúdo infantil'}/> ,
    title: 'BannerPromote',


  },

  {
    id: '02',
    render: () => <HorizontalMovieList 
    title={'Episódios gratuitos'} 
    backgroundColor={'#000'}

    description={'Curta episódios completos sem custo e sem a necessidade de assinatura'}
    list={ListMovies}/> ,
    title: 'BannerPromote',

  },
  

  {
    id: '03',
    render: () => <BannerInsidePromotion 
    img={Banners[1].img}
    title={'A diversão está garantida'} 
    description={'Descubra os universos Warner Bros, DC Comics, HBO, Cartton Network e muitos outros.'}
    textButton={'ASSINE AGORA'}
    /> ,
    title: 'BannerPromote',

  },

  {
    id: '04',
    render: () => <HorizontalMovieList 
    title={'Filmes que você não pode perder'} 
    list={ListMovies}/> ,
    title: 'BannerPromote',

  },

  {
    id: '05',
    render: () => <HorizontalMovieList 
    title={'Séries que recomendamos'} 
    description={'Suas histórias, prograas e personagens favoritos estão aqui.'}
    list={ListMovies}/> ,
    title: 'BannerPromote',

  },
  
  {
    id: '06',
    render: () => <HorizontalMovieList 
    title={'Produzidos na América Latina'} 
    list={ListMovies}/> ,
    title: 'BannerPromote',

  },
  {
    id: '07',
    render: () => <BannerInsidePromotion 
    img={Banners[2].img}
    title={'Escolha o plano ideal para você'} 
    description={'Temos planos para todos os gostos. Escolha o que mais faz sentido para as suas necessidades.'}
    textButton={'ESCOLHA AGORA'}
    /> ,
    title: 'BannerPromote',

  },
  {
    id: '08',
    render: () => <HorizontalMovieList 
    title={'As Melhores franquias do mundo'} 
    description={'Enredos brilhantes, personagens únicos e contos épicos. Os filmes que cativam o mundo estão aqui.s'}
    list={ListMovies}/> ,
    title: 'BannerPromote',

  },
  {
    id: '09',
    render: () => <BannerInsidePromotion 
    img={Banners[3].img}
    title={'Já tem uma conta na HBO Max'}    
    textButton={'ACESSE AGORA'}
    /> ,
    title: 'BannerPromote',

  },
  {
    id: '10',
    render: () => <HorizontalMovieList 
    title={'Marcas da HBO Max'} 
    width={300}
    height={400}
    list={HboBrands}/> ,
    title: 'BannerPromote',

  },
  
];




const FreeHome = ({navigation}) => {

  const OpacityAnimated = new Animated.Value(0);




  const Item = ({ render }) => render();

  const renderItem = ({ item }) => (
    <Item title={item.title} render={item.render} />
  );


   
  return ( 

   <BackgroundGradient>
       <Header animValue={OpacityAnimated}>
       <HeaderHomeAction>
   <Feather name="menu"
   color={'#fff'} size={24}
   style={{alignSelf: 'center', zIndex: 102}}
   onPress={()=>navigation.toggleDrawer()}
   
   />
   </HeaderHomeAction>
       </Header>
       <Animated.FlatList
    
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: OpacityAnimated }
          },
        }],{useNativeDriver: true}
       )}
        scrollEventThrottle={16}
       // styles={{backgroundColor: '#f22231', width: 100, height: 300}}

    >
    </Animated.FlatList>
    <StatusBar barStyle='light-content' backgroundColor='#000'/>
  </BackgroundGradient>
  
  
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'rgba(19,19,19,0.99)',
    position: 'absolute',
    opacity: 1,
    height: '10%',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  box:{
    height: 300,
    backgroundColor: '#DDD',
    margin: 7,
    borderRadius: 5
  }
});

export default FreeHome;