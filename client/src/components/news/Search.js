import React, { Fragment, useState } from "react";
import config from "../../config";

// Components
import NewsContent from "./NewsContent";
import Spinner from "../ui/Spinner";
import PaginationBottom from "./PaginationBottom";
import PaginationTop from "./PaginationTop";

// Helpers
import populate from "../../helpers/populate";

export default function Search() {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    keyWord: "",
  });
  const [news, setNews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const onChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let totalPages, pages;

    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${formData.keyWord}&apiKey=${config.API_KEY}&from=${formData.fromDate}&to=${formData.toDate}`
    );
    const res = await data.json();
    setNews(res.articles);
    setTotalResults(res.totalResults);
    if (res.status === "ok") {
      setLoading(false);
    }

    totalPages = Math.round(totalResults / 20);

    if (totalPages !== 0) {
      pages = populate(1, totalPages);
    }
  };

  return (
    <Fragment>
      <section className='search'>
        <section className='jumbotron bg-light text-dark'>
          <h2 className='text-primary'>Deep Search</h2>
          <p className='lead'>
            Using Deep Search Find News between Two Periods
          </p>
          <form className='form' method='POST' onSubmit={onSubmit}>
            <div className='row'>
              <div className='col-md-3'>
                <div className='form-group'>
                  <label>Keyword</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Phones, Cryptocurrencies'
                    name='keyWord'
                    value={formData.keyWord ? formData.keyWord : ""}
                    onChange={(e) => onChange(e.target.value, "keyWord")}
                  />
                </div>
              </div>
              <div className='col-md-3'>
                <div className='form-group'>
                  <label>From</label>
                  <input
                    type='date'
                    className='form-control'
                    name='fromDate'
                    onChange={(e) => onChange(e.target.value, "fromDate")}
                  />
                </div>
              </div>
              <div className='col-md-3'>
                <div className='form-group'>
                  <label>To</label>
                  <input
                    type='date'
                    className='form-control'
                    name='toDate'
                    onChange={(e) => onChange(e.target.value, "toDate")}
                  />
                </div>
              </div>

              <div className='col-md-3'>
                <div className='form-group'>
                  <label>&nbsp;</label>
                  <button className='btn btn-primary btn-block'>Search</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </section>

      <div className='container'>
        {news &&
          news.length > 0 &&
          news.map((articles, index) => (
            <>
              <NewsContent
                key={index}
                title={articles.title}
                description={articles.description}
                content={articles.content}
                publishedAt={articles.publishedAt}
                source={articles.source.name}
                url={articles.url}
              />
            </>
          ))}

        {loading === false ? (
          <div>
            <h5>{news && news.length === 0 ? " No Results Found" : ""}</h5>
            <p>Try Adjusting the keywords </p>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </Fragment>
  );
}
