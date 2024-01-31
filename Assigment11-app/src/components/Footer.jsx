import React from 'react'
import logo from '../assets/log.jpg'

const Footer = () => {
  return (
    <div className='flex justify-around bg-slate-300 p-10'>
    <div>
        <div>
       
      </div>
      <img width={100} src={logo}alt="" srcset="" />
        <h4 className='text-gray-500'>Follow us:</h4>
        
     </div>
     
     
     <div >
      <h4 className='text-gray-500'>USEFUL LINK</h4>
        <h5> Shopping Cat</h5>
        <h5>WIshlist</h5>
        <h5>Chekout</h5>
       <h5> Support</h5>
     </div>
     

     <div>
      <h4 className='text-gray-500'>ABOUT US</h4>
        <h5>About</h5>
        <h5>Products</h5>
        <h5>Terms and conditions</h5>
       <h5>Help Center</h5>
     </div>
     
     <div>
      <h4 className='text-gray-500'>NEWSLETTER</h4>
        <h5>Subscribe to get all new updates</h5>
        <input className='rounded-2xl p-2' placeholder="Enter your email" type="text" />
        
       
     </div>

    
    
    
    
    
    </div>
        
  )
}

export {Footer};
        
