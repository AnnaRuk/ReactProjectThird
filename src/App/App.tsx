import React from 'react';
import logo from './logo.svg';
import './App.css';
import Items from '../Items/Items';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ItemCard from '../ItemCard/ItemCard';

function App():JSX.Element {
  return (
 
    <Routes> App

<Route path='/' element={<Layout/>} />
  <Route path='items' element={<Items/>} />
  <Route path='items/:itemsId' element={<Items/>} />
  <Route path='item' element={<ItemCard items={[]} index={0}/>} />

    </Routes>

  );
}

export default App;
