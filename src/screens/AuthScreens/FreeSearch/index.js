import React, {useRef, useMemo, useState} from 'react';
import { Animated, StyleSheet, StatusBar } from 'react-native';
import BackgroundGradient from '../../../components/BackgroundGradient';
import { ListMovies } from '../../../services/FakeServices/ListMovies';
import Feather from 'react-native-vector-icons/Feather';


import { Search, InputSearch, TextTitle } from './styles';
import MovieSmallBanner from '../../../components/MovieSmallBanner';
import Header from '../../../components/Header/Index';






const FreeSearch = () => {

  const [searchMovie,setSearchMovie] = useState('')
  const [list,setList] = useState('')

  const [headerName,setHeaderName] = useState('')


  
  const animValue = useRef(new Animated.Value(300)).current;
  useMemo(()=>{

    if (searchMovie == '' || searchMovie === null) {
      setHeaderName('HBO Max Ui Clone recomenda')
      setList(ListMovies);
    } else {
      setHeaderName('Resultados:')
      setList(
        ListMovies.filter(
          (item) =>
          item.name.toLowerCase().indexOf(searchMovie.toLowerCase()) > -1
        )
      );
    }
  
    return {DATA: list}
  },[searchMovie])




  const Item = ({ item }) => (
          
     
         <MovieSmallBanner img={item.img} isAssigned={item.isAssigned}/>
  );
  
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return ( 



    
   <BackgroundGradient>
   
   <Header animValue={animValue}>
   <Search>
   <Feather name="search" color={'#fff'} size={24} />
     <InputSearch 
     placeholder={'O que você está procurando?'} 
     placeholderTextColor={'#606060'}
     onChangeText={text => setSearchMovie(text)}
     value={searchMovie}
     />
   </Search>
   </Header>
    <Animated.FlatList
       
        data={list}
        horizontal={false}
        numColumns={2} // Número de colunas
        renderItem={renderItem}
        ListHeaderComponent={()=><TextTitle>{headerName}</TextTitle>}
        keyExtractor={(item) => item.name}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: animValue }
          },
        }],
        { useNativeDriver: true })}
        scrollEventThrottle={16}
        style={{ paddingTop:80, alignSelf: 'center', }}
    >
    </Animated.FlatList>
    <StatusBar barStyle='light-content' backgroundColor='#000'/>
  </BackgroundGradient>);
}


export default FreeSearch;