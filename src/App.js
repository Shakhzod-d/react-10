import React from 'react'
import Main from './components/Main'
import {Routes,Route} from "react-router-dom";
import Advertisements from './pages/Advertisements'
import Dushboard from './pages/Dushboard'
import Messages from './pages/Messages'
import Uploads from './pages/Uploads'
import Users from './pages/Users'
import Inmessage from './messages/Inmessage';


export default function App() {
  return (
    <>

        <Main/>


        <Routes>
          <Route path='*' element={<Users/>}></Route>
          <Route path='/Uploads' element={<Uploads/>}></Route>
          <Route path='/Messages' element={<Messages/>}></Route>
          <Route path='/Advertisements' element={<Advertisements/>}></Route>
          <Route path='/Dushboard' element={<Dushboard/>}></Route>
        </Routes>

    </>
  )
}
