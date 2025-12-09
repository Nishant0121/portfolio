import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>hello</div>} />
        <Route path="about" element={<div>goat</div>} />
      </Route>
    </Routes>
  )
}

export default App