import React, { Component } from 'react';
import VerticalList from './VerticalList';

// create a component Kajian Maghrib
const KajianMaghrib = ({data}) => {
    return (
        <VerticalList title="Kajian Malam" data={data}/>
    );
};


//make this component available to the app
export default KajianMaghrib;
