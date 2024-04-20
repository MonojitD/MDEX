import React, { useState } from "react";

import Carousel from "../../../components/Carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper.jsx";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");
    

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
    const { data: dataTv, loading: loadingTv } = useFetch(`/trending/tv/${endpoint}`);
    // console.log(dataTv)

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };
    

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending Movies & Shows</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
            <Carousel data={dataTv?.results} loading={loadingTv} />
        </div>
    );
};

export default Trending;
