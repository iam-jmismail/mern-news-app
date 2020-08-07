import React, { Fragment, useState, useEffect } from "react";

// Helpers
import populate from "../../helpers/populate";

// Config
import config from "../../config";

// Components
import NewsContent from "./NewsContent";
import Spinner from "../ui/Spinner";
import PaginationBottom from "./PaginationBottom";
import PaginationTop from "./PaginationTop";

export default function StatesNews(props) {
  const [news, setNews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [stateName, setStateName] = useState("");

  let totalPages, pages;

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        // `https://newsapi.org/v2/top-headlines?country=${config.country}&apiKey=${config.API_KEY}&page=${currentPage}&q=${stateName}`
        `https://newsapi.org/v2/everything?q=${
          stateName ? stateName : "India"
        }&apiKey=${config.API_KEY}`
      );
      const res = await data.json();
      setNews(res.articles);
      setTotalResults(res.totalResults);
      if (res.status === "ok") {
        setLoading(false);
      }
    };
    getData();
    setStateName(props.match.params.state_name);
  }, [currentPage, stateName]);

  // Pagination

  totalPages = Math.round(totalResults / 20);

  const changeNextPage = () => {
    if (totalPages > currentPage) {
      setcurrentPage(currentPage + 1);
      setLoading(true);
    }
  };

  const changePreviousPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
      setLoading(true);
    }
  };

  const changePage = (e, index) => {
    setcurrentPage(index + 1);
    setLoading(true);
  };

  if (totalPages !== 0) {
    pages = populate(1, totalPages);
  }

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='section-national py-4'>
        <div className='container'>
          <h3 className='text-dark'>
            <i className='fas fa-globe-asia mr-2'></i> State News - {stateName}
            <small className='text-secondary'>
              {" "}
              Page ({currentPage}/{totalPages}){" "}
            </small>
          </h3>

          <PaginationTop
            currentPage={currentPage}
            changePreviousPage={changePreviousPage}
            changeNextPage={changeNextPage}
            totalPages={totalPages}
          />

          {news &&
            news.map((articles, index) => (
              <NewsContent
                key={index}
                title={articles.title}
                description={articles.description}
                content={articles.content}
                publishedAt={articles.publishedAt}
                source={articles.source.name}
                url={articles.url}
              />
            ))}

          <PaginationBottom
            pages={pages}
            currentPage={currentPage}
            changePage={changePage}
            totalResults={totalResults}
          />
        </div>
      </section>
    </Fragment>
  );
}
