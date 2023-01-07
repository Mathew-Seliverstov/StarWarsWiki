import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from './HomeRouter'
import Planets from './PlanetsRouter'

const MainRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="/planets" element={<Planets />} />
    </Route>
  </Routes>
)

export default MainRouter
