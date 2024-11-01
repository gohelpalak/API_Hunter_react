import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/Pages/Form'
import Blogdetail from './components/Blogdetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/form' element={<Form/>} />
          <Route path='/blogdetail/:id' element={<Blogdetail/>}/>
        </Routes>
      </BrowserRouter>

     
    </>
  )
}

export default App
