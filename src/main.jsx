import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ItemContainer from './Pages/ItemContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<ItemContainer />} ></Route>
      </Routes>
    </BrowserRouter>
  </>
)