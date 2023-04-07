import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { RouteProps } from 'react-router-dom';
import { Path } from 'react-hook-form';
import AddMemory from './Components/AddMemoryComponent/AddMemory';
import DashBoard from './Components/HomePageComponent/DashBoard';
import SignIn from './Components/SignInComponent/SignIn';
import SignInInfo from './Components/SignInComponent/SignInInfo';
import SignUpInfo from './Components/SignUpComponent/SignUp';
import AddFolder from './Components/AddFolderComponent/AddFolder';
import ClickedFolder from './Components/ClickedFolder/ClickedFolder';
import Logout from './Components/Logout/Logout';
import ShownMemory from './Components/ShownMemory/ShownMemory';

function App(props: RouteProps) {
  return (
    <div className='body'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/SignInInfo' element={<SignInInfo />} />
        <Route path='/SignUp' element={<SignUpInfo />} />
        <Route path='/DashBoard' element={<DashBoard />} />
        <Route path='/AddMemory' element={<AddMemory />} />
        <Route path='/AddFolder' element={<AddFolder />} />
        <Route path='/ClickedMemory' element={<ClickedFolder />} />
        <Route path='/Settings' element={<Logout />} />
        <Route path='/Memory' element={<ShownMemory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
