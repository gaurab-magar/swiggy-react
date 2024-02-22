import React from 'react';
import {useLocation} from 'react-router-dom';

export const Details = () => {
  const location = useLocation()
  return (
    <main className='my-4 container rounded-3 p-5 w-75 bg-light'>
        <section className='container'>
            <div className='row py-4 '>
              <div className=' d-flex justify-content-between '>
                {/* <h1>{location.state?.title}</h1> */}
                <div>
                  <h3>R.S Mani Cafe</h3>
                  <p className='text-muted mb-0'>South Indian,Beverages</p>
                  <p className='text-muted'>Chamber,3.0km</p>
                </div>
                <div>
                  <h3 className='text-success border p-2'>Rate: 4.3</h3>
                </div>
              </div>
            </div>
        </section>
        <section className='container'>
          <div>
            <p className='text-muted'>3km|$20 Delivery fee will apply</p>
            <hr></hr>
            <div className='d-flex gap-2'>
              <div className='card shadow-sm rounded-3'>
                <div className='card-body'>
                  <h5>20% OFF UPTO $7</h5>
                  <p className='text-muted'>No CODE REQUIRED | ABOVE $ 70</p>
                </div>
              </div>
              <div className='card shadow-sm rounded-3'>
                <div className='card-body'>
                  <h5>20% OFF UPTO $7</h5>
                  <p className='text-muted'>No CODE REQUIRED | ABOVE $ 70</p>
                </div>
              </div>
              <div className='card shadow-sm rounded-3'>
                <div className='card-body'>
                  <h5>20% OFF UPTO $7</h5>
                  <p className='text-muted'>No CODE REQUIRED | ABOVE $ 70</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container py-4'>
          <h3 className='fw-bold'>Description:</h3>
          <div className='text-muted'>
            <p>who's hungry ? come take a seat at the sadrasa kitchen and bar, an innoviate space designed for serving traditional reciepies with a modern twist or releasing internatiuonal favourities take your time exploring the flavours of a quick breakfast a leiusly business lunch or aceleberating dinner with friends whatever the occassion whatever the time of day sadrasa kitchen and bar at the ready.</p>
          </div>
        </section>
        <div className='d-flex align-items-center justify-content-center my-4'>
          <button className='btn btn-primary rounded-5 px-5 py-3 fw-bold'>Browse Menu</button>
        </div>
    </main>
  )
}
