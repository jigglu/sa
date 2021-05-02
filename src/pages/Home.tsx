import React, { FC } from 'react'
import { About } from '../components/home/About'
import { Intro } from '../components/home/Intro'
import { Security } from '../components/home/Security'
import { Governance } from '../components/home/Governance'


export const Home: FC = () => {
  return (
    
   <Intro>
      <About />
      <Security />
      <Governance />          
    <Intro />
  )
}
