import React from 'react'
import { Link } from "react-router-dom"
import {AiTwotoneHome} from 'react-icons/ai'
import {MdGroupAdd} from 'react-icons/md'
const Navbar = () => {
  return (
    <div>
        <button> <AiTwotoneHome  color='black' size={20}/> <Link to='/'>Home</Link> </button>
        <button ><MdGroupAdd  color='black' size={20}></MdGroupAdd> <Link to='/addCustomer'>Add Customer</Link> </button>
    </div>
  )
}

export default Navbar