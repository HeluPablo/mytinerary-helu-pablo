import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Cities from './pages/Cities';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import City from './pages/City';
import NewCity from './pages/NewCity';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cities' element={<Cities/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/notfound' element={<NotFound/>}></Route>
        <Route path='/city/:id' element={<City/>}></Route>
        <Route path='/newcity' element={<NewCity/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;