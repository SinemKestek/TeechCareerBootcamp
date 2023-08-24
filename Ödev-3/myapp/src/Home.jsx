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
      
      const toSorted=()=>{
        setSorting(!sorting)
        if(sorting===true){
          let sorted=[...data].sort((a,b)=> a.companyName>b.companyName ? 1: -1)
          // console.log(sorted)
         setData(sorted) 
        
        }
       if(sorting===false){
        let sorted=[...data].sort((a,b)=> a.companyName>b.companyName ? -1: 1)
        setData(sorted)
       }
       console.log(sorting)
       
       
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
          <div>
           { loading ?  <Spinner></Spinner>:
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
                      data.map((dt,id) => {
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