import React from 'react'
import Categories from '../components/Categories/Categories'
import Navbar from '../components/Navbar/Navbar'
import Videos from '../components/Videos/Videos'
import Roadmaps from './Roadmaps/Roadmaps'
import Tutorials from './Tutorials/Tutorials'


export default function Home() {
  return (
    <>
    <Navbar />
    <Categories />
    <Tutorials />
    <Roadmaps />
    <Videos />
    </>
  )
}
