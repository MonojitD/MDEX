import './home.scss'

import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './Trending/Trending'

const Home = () => {
  return (
    <>
    <HeroBanner />
    <Trending />
    <div style={{height:"1000px"}}></div>
    </>
  )
}

export default Home