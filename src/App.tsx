import React from 'react';
import Header from './components/Header/Header';
import './App.css'
import Table from './components/Table/Table';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Update from './pages/Update';
import ErrorPage from './pages/ErrorPage';
import AddNew from './pages/AddNew';
const App = () => {
  return <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/add' element={<AddNew />} />
      <Route path='/update/:id' element={<Update />} />
      <Route path='*' element={<ErrorPage />} />

    </Routes>
  </>;
};

export default App;
