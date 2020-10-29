import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { fetchCountry } from "./API";

function Chart({ country }) {
  const [values, setValues] = useState({
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#877bfa", "#66fb61", "#fb619c"],
        hoverBackgroundColor: ["#6555f3", "#3be635", "#f52374"],
        data: [],
      },
    ],
  });

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

  useEffect(() => {
    setValues({
      ...values,
      datasets: [
        { ...values.datasets[0], data: [confirmed, recovered, deaths] },
      ],
    });
  }, [countryInfo]);

  return (
    <div className='text-center'>
      {confirmed === undefined ? (
        <span className='spinner-border text-danger'></span>
      ) : (
        <Doughnut
          data={values}
          options={{
            title: {
              display: true,
              text: "Statistics",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "top",
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
