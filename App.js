import React from 'react';

import SearchBar from './app/components/SearchBar'
import Screen from './app/components/Screen';
import FeaturedUst from './app/components/FeaturedUst';
import UstTop from './app/components/UstTop';
import KajianMasjid from './app/components/KajianMasjid'
import MasjidKajian from './app/components/MasjidKajian';
import JadwalKajian from './app/components/JadwalKajian';

import data from './DataKajian'

export default function App() {

  const dataKajian = data.filter(item => item.category === 'breaking-news');
  const masjidKaj = data.filter(item => item.category === 'tech');
  const kajianMas = data.filter(item => item.category === 'political');
  const waktuKajian = data.filter(item => item.category === 'entertainment');

  
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
        <KajianMasjid data={kajianMas} />
        <MasjidKajian data={masjidKaj} />
        <JadwalKajian data={waktuKajian} />
        </Screen>
       
    );
  }
