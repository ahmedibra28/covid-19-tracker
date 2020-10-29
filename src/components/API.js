import axios from "axios";

const url = `https://covid19.mathdro.id/api`;

// Fetching countries
export const fetchCountries = async () => {
  try {
    const countries = await axios.get(`${url}/countries/`);
    return countries.data.countries;
  } catch (error) {
    console.error(error);
  }
};

// Fetching specific country
export const fetchCountry = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.error(error);
  }
};
