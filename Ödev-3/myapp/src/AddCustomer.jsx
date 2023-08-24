import React, { useEffect,  useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

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
//  console.log(companyName,contactName,contactTitle)
if(companyName.length==0 || contactName.length==0 ||contactTitle.lenght==0){
  alert("Fill in all the inputs ")

}
 else{
  axios.post('https://northwind.vercel.app/api/customers', newCustomer)
   .then(res => {
    console.log("Response",res.data)
      // alert('Success!!');
   
   })

    navigate("/") 
  
   }

  
 }

  return (
    <div className='container'>
      
        <div className='custom-container'>
            <label>Company Name</label>
            <input type='text' onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        <div className='custom-container'>
            <label>Contact Title</label>
            <input type='text' onChange={(e) => setContactTitle(e.target.value)} />
        </div>
        <div className='custom-container'>
            <label>Contact Name</label>
            <input type='text' onChange={(e) => setContactName(e.target.value)} />
        </div>
      
        <div className='custom-container'>
            <button onClick={() => add()}>Add</button>
        </div>
        <hr />
        <ul></ul>

    </div>
  )
}

export default AddCustomer