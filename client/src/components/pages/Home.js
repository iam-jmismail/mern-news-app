import React, { Fragment, useState, useEffect } from "react";

import Spinner from "../ui/Spinner";
import config from "../../config";

export default function Home() {
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({});
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [headlines, setHeadlines] = useState([]);
  const [headlinesLoading, setHeadlinesLoading] = useState(false);

  useEffect(() => {
    getNewsData();
    getWeatherData();
    getHeadLinesData();
  }, []);

  const getHeadLinesData = async () => {
    setHeadlinesLoading(true);
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${config.country}&apiKey=${config.API_KEY}`
    );
    const res = await data.json();
    if (res.status === "ok") {
      setHeadlinesLoading(false);
      setHeadlines(res.articles.splice(0, 2));
    }
  };

  const getNewsData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://newsapi.org/v2/sources?apiKey=${config.API_KEY}`
    );
    const res = await data.json();
    if (res.status === "ok") {
      setLoading(false);
      setSources(res.sources);
    }
  };

  const getWeatherData = async () => {
    setWeatherLoading(true);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${config.defaultZip},${config.country}&appid=${config.WEATHER_API_KEY}`
    );
    const data = await res.json();
    if (data) {
      setWeather(data);
      setWeatherLoading(false);
    }
  };

  return (
    <Fragment>
      <section className='section-a'>
        <div className='dark-overlay'>
          <div className='container py-4'>
            <div className='row'>
              <div className='col-md-6'>
                {headlinesLoading ? (
                  <Spinner />
                ) : (
                  headlines &&
                  headlines.map((article, index) => (
                    <div className='card mb-1' key={index}>
                      <div className='card-body text-dark'>
                        <a href={article.url} target={`_blank`}>
                          {article.title}
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className='col-md-6 text-center'>
                {weather && weatherLoading === false ? (
                  <Fragment>
                    <h3>{weather.name}</h3>
                    <h1>
                      {weather.main && Math.round(weather.main.temp - 273.15)}
                      <sup>o</sup> C
                    </h1>
                    {weather.weather &&
                      weather.weather.map((data, index) => (
                        <h4 key={index}>{data.main}</h4>
                      ))}

                    <span>
                      min -{" "}
                      {weather.main &&
                        Math.round(weather.main.temp_min - 273.15)}{" "}
                      | max -{" "}
                      {weather.main &&
                        Math.round(weather.main.temp_max - 273.15)}
                    </span>
                  </Fragment>
                ) : (
                  <Spinner />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-b'>
        <div className='container py-3'>
          <div className='row text-center'>
            <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12'>
              <i className='fas fa-broadcast-tower py-2'></i>
              <h2 className='text-primary'>Live Updates</h2>
              <p className='text-dark'>
                Get Live Instant news from time-to-time
              </p>
            </div>

            <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12'>
              <i className='fas fa-newspaper py-2'></i>
              <h2 className='text-primary'>Leading News Portals</h2>
              <p className='text-dark'>
                Get News all leading news daily in India
              </p>
            </div>

            <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12'>
              <i className='fas fa-location-arrow py-2'></i>
              <h2 className='text-primary'>Your Region</h2>
              <p className='text-dark'>
                Get Customized News from your selected State
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <section className='section-c'>
        <div className='container'>
          <h2 className='text-primary text-center'>Our Sources</h2>
          <p>
            Our API Server hits finiest of all reliable new publication for the
            data. We rely on the sources you rely, to bring to you the most
            trusted website than before. You can check the same news from
            different sources for your own satisfaction
          </p>
          {loading ? (
            <Spinner />
          ) : (
            sources &&
            sources.map((source, index) => (
              <Fragment key={index}>
                <a
                  className='badge badge-dark mr-2 mb-2'
                  href={source.url}
                  target={`_blank`}
                >
                  {source.language === "en" && source.name}
                </a>
              </Fragment>
            ))
          )}
        </div>
      </section>

      <section className='section-d'>
        <div className='container'>
          <h2 className='text-primary text-center'>API Partners</h2>
          <div className='d-flex justify-content-center'>
            <a href='https://openweathermap.org/api'>Open Weather Map</a>
            <a href='https://newsapi.org/'>News API</a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
