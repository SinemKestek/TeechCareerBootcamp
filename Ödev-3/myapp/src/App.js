import './App.css';
import Home from './Home';
import {  Route, Router, Routes } from "react-router-dom"
import AddCustomer from './AddCustomer'

function App() {


  return (

    <Routes >
     <Route path="/"  element={<Home />} />
     <Route path="/addCustomer" element={<AddCustomer />} />

    </Routes>
  )
}

export default App;
