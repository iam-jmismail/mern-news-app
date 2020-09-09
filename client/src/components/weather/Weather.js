import React, { Fragment, useState, useEffect } from "react";
import config from "../../config";

export default function States() {
  const [weather, setWeather] = useState({});
  const [weatherLoading, setWeatherLoading] = useState(false);

  useEffect(() => {
    getWeatherData();
  }, []);

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

  console.log(weather);
  return (
    <Fragment>
      <section className='weather py-4'>
        <div className='container'>
          <h3 className='text-dark'>
            <i className='fas fa-bolt mr-2'></i>Weather
          </h3>
          <div className='row'>
            <div className='col-md-6 my-1'>
              <div className='main card card-body'>
                <h2 className='text-primary'>Chennai</h2>
                <p>
                  <span className='display-4'>
                    33<sup>o</sup>C
                  </span>
                </p>
                <p>Cloudy</p>
                <p>
                  <b>Max </b>:37<sup>o</sup>C
                </p>
                <hr />
                <p>
                  <b>Min</b> : 25<sup>o</sup>C
                </p>
                <hr />
                <p>
                  <b>Tomorrow</b> : 45<sup>o</sup>C
                </p>
                <hr />
                <div className='row'>
                  <div className='col-md-4'>
                    <b>Wind: </b>65km/hr
                  </div>
                  <div className='col-md-4'>
                    <b>Humidity: </b>65%
                  </div>
                  <div className='col-md-4'>
                    <b>Pressure: </b>10016Pa
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card side card-body mb-1'>
                <h2 className='text-primary'>T'puram</h2>
                <p>
                  <span className='display-4'>
                    33<sup>o</sup>C
                  </span>
                </p>
                <p>Clear</p>
              </div>
              <div className='card side card-body'>
                <h2 className='text-primary'>B'lore</h2>
                <p>
                  <span className='display-4'>
                    24<sup>o</sup>C
                  </span>
                </p>
                <p>Cloudy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
