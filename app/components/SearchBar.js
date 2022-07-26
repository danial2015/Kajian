import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.container}>
        <TextInput style={styles.input}
            placeholder="Cari disini"
        />
        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 50,
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
        },
        searchInput: {
            width:'100%',
            height: '100%',
            paddingLeft:8,
            fontSize: 16
        }
    })

    export default SearchBar;