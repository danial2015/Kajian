import React, { Component } from 'react';
import VerticalList from './VerticalList';

// create a component
const JadwalKajian = ({data}) => {
    return (
        <VerticalList title="Jadwal Kajian" data={data}/>
    );
};


//make this component available to the app
export default JadwalKajian;
