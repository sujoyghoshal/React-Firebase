import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
// import Counter from './components/counter'
// import Fetch from './components/Fetch'
// import ApiCalling from './components/Apicall'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
      {/* <Counter/> */}
      {/* <Fetch name='React Todo App'/> */}
      {/* <ApiCalling name='React Desktop App'/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
