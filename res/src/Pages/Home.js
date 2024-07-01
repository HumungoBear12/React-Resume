import React from 'react'
import Nav from '../Components/navbar'
import Sum from '../Components/summary'
import Skills from '../Components/skills'
import Exp from '../Components/expierence'
import Certs from '../Components/certs'
import Edu from '../Components/education'
import Ref from '../Components/references'
import Footer from '../Components/footer'

const Home = () => {
  return (
    <div className="Home-Container">
      <Nav/>
      <Sum/>
      <Skills/>
      <Exp/>
      <Certs/>
      <Edu/>
      <Ref/>
      <Footer/>
    </div>
  )
}

export default Home