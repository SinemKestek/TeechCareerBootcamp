import './App.css';
import Home from './Home';
import {  Route, Router, Routes } from "react-router-dom"
import AddCustomer from './AddCustomer'

function App() {

// const getData = () => {
//   if( selectedOption === "all"){
//     axios.get('https://northwind.vercel.app/api/customers')
//   .then(res =>   setData(res.data) ) }
// else{
//   axios.get('https://northwind.vercel.app/api/customers')
//   .then(res => {   
//       setData(res.data.splice(0,selectedOption));
//      console.log(selectedOption)
       
//   })
// }

 

 
// };

// const toSorted=()=>{
//   setSorting(!sorting)
//   if(sorting===true){
//     let sorted=[...data].sort((a,b)=> a.companyName>b.companyName ? 1: -1)
//     // console.log(sorted)
//    setData(sorted) 
  
//   }
//  if(sorting===false){
//   let sorted=[...data].sort((a,b)=> a.companyName>b.companyName ? -1: 1)
//   setData(sorted)
//  }
//  console.log(sorting)
 
 
// }
// const onOptionChangeHandler = (event) => {
//   let selectValue= event.target.value
//   // console.log(" Selected Value - ", selectValue)
 
//   SetSelectedOption(selectValue)
//   // -1  console.log(selectedOption)
//   return selectValue

// }

// useEffect(() => {
//   setLoading(true)
//   setTimeout(()=>{
//     setLoading(false)
//   },1000)
//   getData();
 
// }, [selectedOption]);


  return (

    <Routes >
     <Route path="/"  element={<Home />} />
     <Route path="/addCustomer" element={<AddCustomer />} />

    </Routes>
  )
}

export default App;
