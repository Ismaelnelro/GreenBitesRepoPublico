import { Route, Routes } from 'react-router-dom'

import AppRoutes from './routes/AppRoutes'
import AdminRoutes from './routes/AdminRoutes'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/*' element={<AppRoutes />} />
      <Route path='/admin/*' element={<AdminRoutes />} />
    </Routes>
  )
}

export default App