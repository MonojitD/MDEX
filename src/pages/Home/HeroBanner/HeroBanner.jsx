import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './heroBanner.scss'

import useFetch from '../../../hooks/useFetch.jsx';
import Img from '../../../components/lazyLoadImages/Img.jsx';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper.jsx';
import ErrorModal from '../../../components/errorModal/ErrorModal.jsx';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const [dataVal, setDataVal] = useState(null);

  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);


  const { data, loading } = useFetch("/movie/upcoming");
  console.log(`loading: ${loading}`)

  const baseBackdropURL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    setDataVal(data)
    // const bg = url.backdrop + data?.results[Math.floor(Math.random() * 21)]?.backdrop_path;
    const bg = `${data != "Network Error" ? baseBackdropURL + data?.results[Math.floor(Math.random() * 21)]?.backdrop_path : ""}`;
    setBackground(bg);
  }, [data])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        setDataVal('Network Error');
      }
    }, 20000);

    return () => clearTimeout(timeout);
  }, [loading]);

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
          <span className="title">{dataVal === null ? "Loading..." : dataVal === "Network Error" ? "Oops !" : "Welcome."}</span>
          <span className="sub_title">{dataVal === null || dataVal === "Network Error" ? "Please hang on a minute. We are trying to get data." : "Millions of movies, shows and contents to discover. Explore now."}</span>
          <div className="search_input">
            <input type="text" name="" id="" placeholder='Search for a movie or tv show...' onKeyUp={searchQueryHandler} onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={() => navigate(`/search/${query}`)}>Search</button>
          </div>
        </div>
      </ContentWrapper>
      {dataVal === "Network Error" ? <ErrorModal errorMessage={dataVal} /> : ""}
    </div>
  )
}

export default HeroBanner