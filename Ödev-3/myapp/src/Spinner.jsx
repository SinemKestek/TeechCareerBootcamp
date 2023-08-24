import FadeLoader from "react-spinners/FadeLoader"
import React from 'react'

const Spinner = () => {
 const spinnerStyle={
  
   height:"80vh",
   alignItems:"center",
   display:"flex",
   justifyContent:"center"

 }

  return (
    <div className="spinner" style={spinnerStyle}>
      <FadeLoader color="#f5dd42"></FadeLoader>
      
  </div>
  )
}

export default Spinner