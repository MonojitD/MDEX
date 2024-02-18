import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './heroBanner.scss'

import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/LazyLoadImages/Img';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);


  const { data, loading } = useFetch("/movie/upcoming");

  const baseBackdropURL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    // const bg = url.backdrop + data?.results[Math.floor(Math.random() * 21)]?.backdrop_path;
    const bg = baseBackdropURL + data?.results[Math.floor(Math.random() * 21)]?.backdrop_path;
    setBackground(bg);
  }, [data])

  const searchQueryHandler = (event) => {
    if(event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className="hero_banner">
      {!loading && 
        <div className="backdrop_img">
          <Img src={ background }/>
        </div>
      }
      <div className="opacity_layer"></div>
      <ContentWrapper>
        <div className="hero_banner_content">
          <span className="title">Welcome.</span>
          <span className="sub_title">Millions of movies, TV shows and people to discover. Explore now.</span>
          <div className="search_input">
            <input type="text" name="" id="" placeholder='Search for a movie or tv show...' onKeyUp={searchQueryHandler} onChange={(e) => setQuery(e.target.value)}/>
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner