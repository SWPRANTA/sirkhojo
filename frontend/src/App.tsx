import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ProfessorsProvider } from './contexts/ProfessorsContext'
import SearchProf from './pages/SearchProf'
import Scholorship from './pages/Scholorship'
import ProfessorProfile from './pages/ProfessorProfile'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <ProfessorsProvider>
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchprof" element={<SearchProf />} />
          <Route path='/scholorships' element={<Scholorship/>}/>
          <Route path="/professor/:id" element={<ProfessorProfile/>} />
          <Route path="/about" element={<AboutUs/>}/>
        </Routes>
        </div>
        <Footer />
    </BrowserRouter>
    </ProfessorsProvider>
  )
}

export default App
