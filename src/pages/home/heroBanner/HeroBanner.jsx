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
  // console.log(error)

  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);


  const { data, loading, error } = useFetch("/movie/upcoming");
  // console.log(data.response)
  console.log(`loading: ${loading}`)
  // console.log(error)

  const baseBackdropURL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    setDataVal(data)
    // const bg = url.backdrop + data?.results[Math.floor(Math.random() * 21)]?.backdrop_path;
    // const bg = baseBackdropURL + data?.results[Math.floor(Math.random() * 21)]?.backdrop_path;
    const bg = `${data != "Network Error" ? baseBackdropURL + data?.results[Math.floor(Math.random() * 21)]?.backdrop_path : ""}`;
    setBackground(bg);
  }, [data])

  console.log("Start")
  setTimeout(() => {
    console.log(new Date().getTime())
    if(loading) {
      setDataVal("Network Error");
      console.log("End")
    }
  }, 20000)

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
          <span className="title">{loading ? "Loading..." : dataVal === "Network Error" ? "Oops !" : "Welcome."}</span>
          <span className="sub_title">{loading ? "Please wait a minute. We are trying to get data." : "Millions of movies, TV shows and people to discover. Explore now."}</span>
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