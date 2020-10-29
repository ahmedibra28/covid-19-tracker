import { useEffect, useState } from "react";
import { fetchCountries } from "./API";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, [countries]);

  return (
    <div className='input-group my-3 m-auto ' style={{ maxWidth: "500px" }}>
      <select
        name='search'
        aria-describedby='basic-addon2'
        className='form-control shadow-none'
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value=''>Global</option>
        {countries.map((country) => {
          return (
            <option value={countries.name} key={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>

      <span className='input-group-text' id='basic-addon2'>
        {countries.length === 0 ? (
          <span className='spinner-grow text-danger'></span>
        ) : (
          <i className='fa fa-search'></i>
        )}
      </span>
    </div>
  );
};

export default CountryPicker;
