import 'bootstrap/dist/css/bootstrap.min.css'
declare module "*.png"
import Home from './components/Home'
import Signup from './components/Signup'
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import MakeSession from './components/MakeSession'
import FormSession from './components/FormSession'
import BuyGifts from './components/BuyGifts'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/buy" element={<BuyGifts />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
