import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Popular from '../../components/Popular/Popular'
import NewsLetter from '../../components/NewsLetter/NewsLetter'


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Popular></Popular>  
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home