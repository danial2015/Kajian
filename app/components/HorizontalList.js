//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SmallCard from './SmallCard';
import Title from './Title'

// create a component
const HorizontalList = ({title, data}) => {
    return (
        <>
       <Title size={20}> {title}</Title> 
        <FlatList data = {data} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} 
        renderItem={({item})=><SmallCard item={item}/>}
        />
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       
    },
});

//make this component available to the app
export default HorizontalList;
