import React from 'react'
import { useEffect, useState } from 'react';
import {BiSortAlt2} from 'react-icons/bi'
import Spinner from './Spinner';
import axios from 'axios';
import Navbar from './Navbar';

const Home = () => {
    const [data,setData]=useState([])
    const [sorting,setSorting]=useState(true)
    const [selectedOption,SetSelectedOption]=useState("all")
    const [loading,setLoading]=useState(false)

    const getData = () => {
        if( selectedOption == "all" ){
          axios
          .get('https://northwind.vercel.app/api/customers')
        .then((res) =>  setData(res.data));
         
     }
      else{
        axios.get('https://northwind.vercel.app/api/customers')
        .then((res) =>{setData(res.data.splice(0,selectedOption));
        })
       }
      };
      
 const sortedData=[...data].sort((a,b)=>{
  if(sorting){
    return a.companyName.localeCompare(b.companyName);
  }
  else{
    return b.companyName.localeCompare(a.companyName)
  }
 })

      const toSorted=()=>{
        setSorting(!sorting)
      }
      const onOptionChangeHandler = (event) => {
        let selectValue= event.target.value
        SetSelectedOption(selectValue)
        return selectValue
      
      }
      
      useEffect(() => {
        getData()
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },1000)
       
     
       
      }, [selectedOption]);
      
      

  return (
    <div className='container'>
        
     
      <>
       <div className='menu'>
        <Navbar SetSelectedOption={SetSelectedOption}/>
        <div >
            <select id="data-length" name="data-length" value={selectedOption} onChange={onOptionChangeHandler}>
              <option value="all">All</option>
              <option value="5">5</option>
              <option value="10">10</option>
             <option value="15">15</option>
         </select>
         </div>
          </div>
          <div >
           { loading ?  <Spinner/>:
              <table>
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Company Name <span className='sort' onClick={()=>toSorted()}><BiSortAlt2 size={25}/></span>  </th>
                      <th>Street</th>
                      <th>City</th>
                 
                  </tr>
               
              </thead>
              <tbody>
                  { 
                      sortedData.map((dt,id) => {
                          return <tr key={dt.id}>
                              <td>{dt.id}</td>
                              <td>{dt.companyName}</td>
                               <td>{dt.contactName}</td>
                               <td>{dt.contactTitle}</td>
                    
                          </tr>
                      })
                  }
              </tbody>
                </table>
           }
          </div>

      </>
    
    </div>
  )
}

export default Home