import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";
import NotFound from "./pages/404/NotFound";


function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home);

  

  const fetchApiConfig = () => {
    fetchDataFromApi(`/configuration`)
      .then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }
        // console.log(url)
        dispatch(getApiConfiguration(url))
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const genresCall = async () => {
    let promisses = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promisses.push(fetchDataFromApi(`/genre/${url}/list`));
    })

    const data = await Promise.all(promisses);
    // console.log(data)
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    })

    dispatch(getGenres(allGenres))
  }

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  },[]);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
