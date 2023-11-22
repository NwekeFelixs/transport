import React from 'react'
import TopNav from './fragment/TopNav'
import Header from './fragment/Header'
import Footer from './fragment/Footer'
import ContactSection from './fragment/ContactSection'

function Contact() {
  return (
    <div>
    <TopNav/>
    <Header/>
    <main>
      <ContactSection/>
    </main>
    <Footer/>
  </div>
  )
}

export default Contact