import React from 'react'
import { Link } from "react-router-dom"
import {AiTwotoneHome} from 'react-icons/ai'
import {MdGroupAdd} from 'react-icons/md'

const Navbar = ({SetSelectedOption}) => {
  const dataLoad=()=>{
    console.log("cliiiiiick")
     SetSelectedOption("all")
   
  }
  return (
    <div className='menu'>
   <div>
         <button SetSelectedOption={SetSelectedOption} onClick={dataLoad} > <AiTwotoneHome  color='black' size={20}/> <Link to='/'>Home</Link> </button>
        <button ><MdGroupAdd  color='black' size={20}></MdGroupAdd> <Link to='/addCustomer'>Add Customer</Link> </button>
   </div>
    </div>
  )
}

export default Navbar