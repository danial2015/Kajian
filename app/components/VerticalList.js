//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from './Title'
import FlatCard from './FlatCard'

// create a component
function VerticalList({ title, data }) {
    return (
        <View>
            <Title>{title}</Title>
            <View style={styles.container}>
            {data.map(item => <FlatCard item={item} key={item.id} />)}
            </View>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        marginVertical:15,
        
    },
});

//make this component available to the app
export default VerticalList;
