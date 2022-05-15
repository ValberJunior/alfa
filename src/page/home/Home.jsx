import React from 'react'
import { About, Carousel, Contact, Faq, Footer, Header, KnowMore, Plans, Waves } from '../../components'

const Home = () => {
  return (
    <>
      <Header/>
      <Carousel/>
      <Waves/>
      <KnowMore/>
      <Plans/>
      <About/>
      <Faq/>
      <Contact/>  
      <Footer/>   
    </>
  )
}

export default Home