//import liraries
import React, { Component } from 'react';
import VerticalList from './VerticalList';

// create a component
const KajianMasjid = ({data}) => {
    return (
        <VerticalList title="Kajian" data={data}/>
    );
};


//make this component available to the app
export default KajianMasjid;
