//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import BlockCard from './BlockCard';

// create a component
  const {width} = Dimensions.get('window');

const SmallCard = ({item}) => {
    return <BlockCard item={item} style={styles.container} imageStyle={styles.image}/>
    
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width: width/2,
        marginRight:15,
        height:200
    },
    image:{
        height:100
    }
});

//make this component available to the app
export default SmallCard;
