//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Subtitle = ({children,numberOfLines = 2,size=15}) => {
    return (
        // <View style={styles.container}>
           <Text numberOfLines={numberOfLines} styles={{fontSize:size}}>{children}</Text> 
        // </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       
    },
});

//make this component available to the app
export default Subtitle;
