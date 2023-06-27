import React, { useEffect } from "react";

const News = () => {
  // inactive

  const getNews = async () => {
    let url =
      "https://api.currentsapi.services/v1/latest-news?" +
      "language=us&" +
      `apiKey=${process.env.NEWS_API_KEY}`;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
  };

  useEffect(() => {}, []);

  return <div></div>;
};

export default News;
