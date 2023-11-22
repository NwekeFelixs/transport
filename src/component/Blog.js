import React from 'react'
import TopNav from './fragment/TopNav'
import Header from './fragment/Header'
import Footer from './fragment/Footer'
import LatestNewsSection from './fragment/LatestNewsSection'

function Blog() {
  return (
    <div>
    <TopNav/>
    <Header/>
    <main>
      <LatestNewsSection/>
    </main>
    <Footer/>
  </div>
  )
}

export default Blog