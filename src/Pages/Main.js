import React, { useEffect } from 'react';
import { Restraunt } from '../Components/Restraunt';
import {useState} from "react";
import {getRestraunts} from "../API/Api"

export const Main = () => {
  const [restrauntLists , setRestrauntList] = useState([]);
  
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        let data = await getRestraunts();
        setRestrauntList(data)
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  },[])
  return (
    <main>
      <section className='container py-4'>
        <h2 className='fw-bold'>Restaurants with online food delivery in Bangalore</h2>
        <div className='row my-4'>
          {restrauntLists.map((data)=>(
            <Restraunt  key={Math.random()} data={data} />
          ))}
        </div>
      </section>
    </main>
  )
}