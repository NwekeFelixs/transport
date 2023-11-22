import React from 'react'
import './css/styles.css';
import Header from './fragment/Header'
import ServicesSection from './fragment/ServicesSection';
import TopNav from './fragment/TopNav';
import WhyChoose from './fragment/WhyChoose';
import TransportSection from './fragment/TransportSection';
import TestimonialSection from './fragment/TestimonialSection';
import Features from './fragment/Features';
import ContactSection from './fragment/ContactSection';
import LatestNewsSection from './fragment/LatestNewsSection';
import Footer from './fragment/Footer';

function Home() {
  return (
    <div>
       <TopNav/>
       <Header/>
       <main>
         <ServicesSection/>
         <WhyChoose/>
         <TransportSection/>
         <TestimonialSection/>
         <Features/>
         <ContactSection/>
         <LatestNewsSection/>
       </main>
       <Footer/>
    </div>
  )
}

export default Home