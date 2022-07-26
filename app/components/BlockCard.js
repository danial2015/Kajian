//import liraries
import { useCardAnimation } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Title from './Title';
import Subtitle from './Subtitle';

// create a component
const BlockCard = ({style,imageStyle}) => {
    return (
        <View style={[styles.container,style]}>
            <Image source={require('../../assets/uas.jpg')} style={[styles.image,imageStyle]}/>
        <View style={styles.contentContainer}>
            <Title>UAS</Title>
            <Subtitle>Ustadz Abdul Somad</Subtitle>
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius:8,
        overflow: 'hidden',
        backgroundColor:'#fff'
    },
    image:{
        width: '100%',
        height:200
    },
    contentContainer: {
        padding: 5
    }
});

//make this component available to the app
export default BlockCard;
