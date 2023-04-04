import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddMemory from './Components/AddMemoryComponent/AddMemory.tsx';
import DashBoard from './Components/HomePageComponent/DashBoard.tsx';
import SignIn from './Components/SignInComponent/SignIn.tsx';
import SignInInfo from './Components/SignInComponent/SignInInfo.tsx';
import SignUpInfo from './Components/SignUpComponent/SignUp.tsx';

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='SignInInfo' element={<SignInInfo />} />
          <Route path='/SignUp' element={<SignUpInfo />} />
          <Route path='/DashBoard' element={<DashBoard />} />
          <Route path='/AddMemory' element={<AddMemory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
