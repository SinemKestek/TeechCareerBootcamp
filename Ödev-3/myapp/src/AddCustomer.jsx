import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import {Toaster,toast} from 'react-hot-toast'
const AddCustomer = () => {

  const [companyName, setCompanyName] = useState("")
  const[contactTitle,setContactTitle]=useState("")
  const[contactName,setContactName]=useState("")

  const navigate=useNavigate()

   const add= ()=>{

    var newCustomer = {
      companyName,
      contactTitle,
      contactName,
    }
     console.log(newCustomer)

if(companyName.length==0 || contactName.length==0 ||contactTitle.lenght==0){
  toast.error("Please enter valid value")
}
 else{
  axios.post('https://northwind.vercel.app/api/customers', newCustomer)
   .then(res => {
    console.log("Response",res.data)  
   })
    .finally(()=>navigate("/") )
   }

  
 }


  return (
    <div className='container'>
       
      <Navbar></Navbar>
      <Toaster position="top-right" reverseOrder={false}/>
        <div className='custom-container'>
            <label>Company Name</label>
            <input type='text' onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        <div className='custom-container'>
            <label>Contact Title</label>
            <input type='text' onChange={(e) => setContactName(e.target.value)} />
        </div>
        <div className='custom-container'>
            <label>Contact Name</label>
            <input type='text' onChange={(e) => setContactTitle(e.target.value)} />
        </div>
      
        <div className='custom-container'>
            <button onClick={() => add()}>Add</button>
        </div>
       
        

    </div>
  )
}

export default AddCustomer