import React from 'react'
import TopNav from './fragment/TopNav'
import Header from './fragment/Header'
import TestimonialSection from './fragment/TestimonialSection';
import AboutSection from './fragment/AboutSection'
import AboutServicesSection from './fragment/AboutServicesSection'
import TeamSection from './fragment/TeamSection'
import Footer from './fragment/Footer';
import Features from './fragment/Features';

function About() {
  return (
    <div>
      <TopNav/>
      <Header/>
      <main>
        <AboutSection/>
        <AboutServicesSection/>
        <TeamSection/>
        <TestimonialSection/>
        <Features/>
      </main>
      <Footer/>
    </div>
  )
}

export default About