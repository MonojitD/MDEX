import './home.scss'

import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './Trending/Trending'
import Popular from './Popular/Popular'
import TopRated from './topRated/TopRated'
import Upcoming from './upcoming/Upcoming'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <Upcoming />
    </>
  )
}

export default Home