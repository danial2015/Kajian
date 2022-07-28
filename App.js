import React from 'react';

import SearchBar from './app/components/SearchBar'
import Screen from './app/components/Screen';
import FeaturedUst from './app/components/FeaturedUst';
import UstTop from './app/components/UstTop';
import KajianDhuha from './app/components/KajianDhuha'
import MasjidKajian from './app/components/MasjidKajian';
import KajianMaghrib from './app/components/KajianMaghrib';

import data from './DataKajian'

export default function App() {

  const dataKajian = data.filter(item => item.category === 'breaking-news');
  const masjidKaj = data.filter(item => item.category === 'tech');
  const kajianDhuha = data.filter(item => item.category === 'political');
  const kajianMaghrib = data.filter(item => item.category === 'entertainment');

  
  return (
       <Screen>
        <SearchBar />
        <FeaturedUst item = {{
          id: '1',
          title: 'This is the title no one.',
          desc:
            'Desc is the short form of description and this format is the actual same as our real database.',
          thumbnail: 'https://ruangberita.co/files/images/20201203-screenshot-20201203-110622-instagram.jpg'
        }}
        />
        <UstTop data={dataKajian} />
        <KajianDhuha data={kajianDhuha} />
        <MasjidKajian data={masjidKaj} />
        <KajianMaghrib data={kajianMaghrib} />
        </Screen>
       
    );
  }
