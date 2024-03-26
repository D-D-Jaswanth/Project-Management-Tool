import React, { useContext } from 'react'
import Navbar from '../screens/Navbar'
import { store } from '../App'
import Homepage from './ProjectManager/Homepage'
import Header from './Header'
import SectionAbout from './SectionAbout'
import SectionCategory from './SectionCategory'
import SectionContact from './SectionContact'
import Footer from './Footer'

function Home() {

  const [token, setToken] = useContext(store)

  return (
    <>
      <Navbar />
      {
        token ?
        (
          <Homepage />
        )
        :
        (
          <div>
            <Header />
            <SectionAbout />
            <SectionCategory />
            <SectionContact />
            <Footer />
          </div>
        )
      }
    </>
  )
}

export default Home