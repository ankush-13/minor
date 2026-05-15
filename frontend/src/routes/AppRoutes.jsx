import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Traffic from '../pages/Traffic'
import Signals from '../pages/Signals'
import Emergency from '../pages/Emergency'
import Violations from '../pages/Violations'

import MainLayout from '../layouts/MainLayout'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='traffic' element={<Traffic />} />
          <Route path='signals' element={<Signals />} />
          <Route path='emergency' element={<Emergency />} />
          <Route path='violations' element={<Violations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes