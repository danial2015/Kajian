//import liraries
import React, { Component } from 'react';
import VerticalList from './VerticalList';

// create a component
const KajianDhuha = ({data}) => {
    return (
        <VerticalList title="Kajian Hari" data={data}/>
    );
};


//make this component available to the app
export default KajianDhuha;
