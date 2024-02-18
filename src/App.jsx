import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { fetchDataFromApi } from "./utils/api"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Details from "./pages/Details/Details"
import Explore from "./pages/Explore/Explore"
import SearchResult from "./pages/SearchResult/SearchResult"
import NotFound from "./pages/404/NotFound"


function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home);

  

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }
        console.log(url)
        dispatch(getApiConfiguration(url))
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    fetchApiConfig()
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
