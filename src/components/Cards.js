import React, { useEffect, useState } from "react";
import { fetchCountry } from "./API";
import moment from "moment";
import CountUp from "react-countup";

const Cards = ({ country }) => {
  const [countryInfo, setCountryInfo] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountryInfo(await fetchCountry(country));
    };
    fetchAPI();
  }, [country]);

  let confirmed = countryInfo.confirmed && countryInfo.confirmed.value;
  let recovered = countryInfo.recovered && countryInfo.recovered.value;
  let deaths = countryInfo.deaths && countryInfo.deaths.value;
  let lastUpdate = countryInfo.lastUpdate && countryInfo.lastUpdate;

  return (
    <div className='row'>
      <div className='col-4 col-md-4 col-lg 12 col-12'>
        <div
          className='card text-center '
          style={{ borderBottom: "solid 8px #877bfa" }}
        >
          <div className='card-header' style={{ background: "#877bfa" }}>
            Infected
          </div>
          <div className='card-body'>
            <h5 className='card-title'>
              {confirmed === undefined ? (
                <span className='spinner-border text-danger'></span>
              ) : (
                <CountUp
                  end={confirmed !== undefined && confirmed}
                  separator=','
                />
              )}
            </h5>
            <h5 className='card-title text-muted'>
              {moment(lastUpdate).format("MMMM Do YYYY, h:mm:ss a")}
            </h5>
            <p className='card-text'>Number of active cases of COVID-19</p>
          </div>
        </div>
      </div>

      <div className='col-4 col-md-4 col-lg 12 col-12'>
        <div
          className='card text-center '
          style={{ borderBottom: "solid 8px #66fb61" }}
        >
          <div className='card-header' style={{ background: "#66fb61" }}>
            Recovered
          </div>
          <div className='card-body'>
            <h5 className='card-title'>
              {recovered === undefined ? (
                <span className='spinner-border text-danger'></span>
              ) : (
                <CountUp
                  end={recovered !== undefined && recovered}
                  separator=','
                />
              )}
            </h5>
            <h5 className='card-title text-muted'>
              {moment(lastUpdate).format("MMMM Do YYYY, h:mm:ss a")}
            </h5>
            <p className='card-text'>Number of recovers from COVID-19</p>
          </div>
        </div>
      </div>

      <div className='col-4 col-md-4 col-lg 12 col-12'>
        <div
          className='card text-center '
          style={{ borderBottom: "solid 8px #fb619c" }}
        >
          <div className='card-header' style={{ background: "#fb619c" }}>
            Deaths
          </div>
          <div className='card-body'>
            <h5 className='card-title'>
              {deaths === undefined ? (
                <span className='spinner-border text-danger'></span>
              ) : (
                <CountUp end={deaths !== undefined && deaths} separator=',' />
              )}
            </h5>
            <h5 className='card-title text-muted'>
              {moment(lastUpdate).format("MMMM Do YYYY, h:mm:ss a")}
            </h5>
            <p className='card-text'>Number of deaths caused by COVID-19</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
