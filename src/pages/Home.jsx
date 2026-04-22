

import About from '../components/sections/About'
import Banner from '../components/sections/Banner'
import Blogs from '../components/sections/Blogs'
import Brands from '../components/sections/Brands'
import Collection from '../components/sections/Collection'
import Features from '../components/sections/Features'
import Hero from '../components/sections/Hero'
import Shop from '../components/sections/Shop'
import Steps from '../components/sections/Steps'
import Team from '../components/sections/Team'

function Home() {
  return (
    <>
            <Hero />
            <About />
            <Features />
            <Steps />
            <Brands />
            <Shop />
            <Collection />
            <Team />
            <Banner />
            <Blogs />
    </>
  )
}

export default Home