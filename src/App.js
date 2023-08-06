import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = "null";

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          {!user ? (<Route path='/' element={<HomeScreen />} />) : (<Route path='/login' element={<LoginScreen />} />)}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;