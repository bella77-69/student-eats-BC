import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './pages/Main'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
