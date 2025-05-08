import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from './layouts/RootLayout'
import Home from './Pages/Home'
import Shop from './Pages/Shop'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App