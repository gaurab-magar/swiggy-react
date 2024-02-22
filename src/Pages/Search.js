import React from 'react'
import { Restraunt } from '../Components/Restraunt';
import { useEffect } from 'react';
import { useState } from 'react';
import { getRestraunts } from '../API/Api';


export const Search = () => {
    const [restrauntLists , setRestrauntList] = useState([]);
    const [searchItems , setSearchItems] = useState([]);
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const data = await getRestraunts();
                setRestrauntList(data);
            } catch (error) {
                console.log(error);
                setRestrauntList([]);
            }
        };
        fetchRestaurants();
    }, []);

    const handleSearch = ()=>{
        let filterData = restrauntLists.filter((item)=>{
           return item.name.toLowerCase().includes(searchItems.toLowerCase())  ||  searchItems === '';
       });
        setRestrauntList(filterData);
        setSearchItems('');
    }
  return (
    <main>
        <div className="container my-4">
           <div className='row'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <input onChange={handleSearch} className='form-control my-4 w-50 p-3' placeholder='Search for restaurants and food'></input>
                </div>
           </div>
           <section className='container border'>
                <h2 className='fw-bold my-3'>Popular Cusine</h2>
                <div className='row'>
                    <div className='d-flex align-items-center justify-content-center gap-4'>
                        <div className='img-container'>
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150/v1675667625/PC_Creative%20refresh/Biryani_2.png"></img>
                        </div>
                        <div className='img-container'>
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150/v1675667625/PC_Creative%20refresh/Biryani_2.png"></img>
                        </div>
                        <div className='img-container'>
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150/v1675667625/PC_Creative%20refresh/Biryani_2.png"></img>
                        </div>
                        <div className='img-container'>
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150/v1675667625/PC_Creative%20refresh/Biryani_2.png"></img>
                        </div>
                        <div className='img-container'>
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150/v1675667625/PC_Creative%20refresh/Biryani_2.png"></img>
                        </div>
                        <div className='img-container'>
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150/v1675667625/PC_Creative%20refresh/Biryani_2.png"></img>
                        </div>
                    </div>
                </div>
           </section>
           <section className=' py-4 container'>
                <div className='row my-4'>
                    {searchItems && restrauntLists.map((data)=>(
                        <Restraunt  key={Math.random()} data={data} />
                    ))}
                </div>
           </section>
        </div>
    </main>
  )
}

