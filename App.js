import React from 'react';

import SearchBar from './app/components/SearchBar'
import Screen from './app/components/Screen';
import BlockCard from './app/components/BlockCard';
import FeaturedUst from './app/components/FeaturedUst';
import SmallCard from './app/components/SmallCard';

export default function App() {
  return (
       <Screen>
        <SearchBar />
        <FeaturedUst />
        <SmallCard />
        </Screen>
       
    );
  }
