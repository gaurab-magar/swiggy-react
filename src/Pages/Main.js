import React, { useEffect } from 'react';
import { Restraunt } from '../Components/Restraunt';
import {useState} from "react";

export const Main = () => {
  const [restrauntLists , setRestrauntList] = useState([]);
  useEffect(()=>{
    const getRestraunts = async() =>{
      // new
      const url = 'https://burgers-hub.p.rapidapi.com/burgers';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '170ab18825msh6daac5838c6c2edp16adc0jsn33095bab84c3',
          'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setRestrauntList(data);
      } catch (error) {
        console.log(error);
      }
    }
    getRestraunts()
  },[])
  return (
    <main>
      <section className='container py-4'>
        <h2 className='fw-bold'>Restaurants with online food delivery in Bangalore</h2>
        <div className='row my-4'>
          {restrauntLists.map(()=>(
            <Restraunt  key={Math.random()} />
          ))}
        </div>
      </section>
    </main>
  )
}