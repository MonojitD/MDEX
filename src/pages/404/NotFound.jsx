import React from "react";

import "./not-found.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper.jsx";

const NotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    );
};

export default NotFound;