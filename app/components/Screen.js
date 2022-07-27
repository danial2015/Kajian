//import liraries
import React from 'react';
import { View, StyleSheet,StatusBar,ScrollView } from 'react-native';

// create a component
const Screen = ({children}) => {
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal:15,
        flex:1,
        backgroundColor: '#f7f3f3'
    },
});

//make this component available to the app
export default Screen;
