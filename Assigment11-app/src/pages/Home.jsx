import React from 'react'
import { Navbar } from '../components/Navbar'
import Cards from '../components/Cards'
import { Carousil } from '../components/Carousil'
import Head from '../components/Head'
import { Footer } from '../components/Footer'
import { Scd_Footer } from '../components/Scd_Footer'


const Home = () => {
  return (

    <div>
       
        <Carousil/>
        <Cards/>
        <Head/>
       
        
       
    </div>
  )
}

export {Home};