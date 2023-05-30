import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:project_id" element={<ProjectDetails/>}/>
    </Routes>   
    </BrowserRouter>
  )
}

export default App
