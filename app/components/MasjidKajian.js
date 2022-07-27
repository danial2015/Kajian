//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HorizontalList from './HorizontalList';

// create a component
const MasjidKajian = ({data}) => {
    return (
        <HorizontalList title="Mesjid" data={data}/>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
    },
});

//make this component available to the app
export default MasjidKajian;
