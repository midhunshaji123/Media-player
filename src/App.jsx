import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Haeder from './components/Haeder'
import Footer from './components/Footer'
import Athulya from './pages/Athulya'

function App() {
 

  return (
    <>
      {/* Header */}
      <Haeder/>

{/* Path for Langing,Home,History    Base url:http://localhost:5173/, home(/home),history(/history)*/}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/new' element={<Athulya/>} />
      </Routes>


      {/* Footer */}
      <Footer/>
    </>
  )
}

export default App
