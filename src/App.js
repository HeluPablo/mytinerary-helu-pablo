import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
    </Layout>
  );
}

export default App;