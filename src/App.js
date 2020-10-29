import { useState } from "react";
import "./App.css";
import logo from "./logo.png";
import Cards from "./components/Cards";
import Chart from "./components/Chart";
import CountryPicker from "./components/CountryPicker";

function App() {
  const [country, setCountry] = useState("");
  const handleCountryChange = async (e) => {
    await setCountry(e);
  };

  return (
    <div className='container my-4'>
      <div className='text-center'>
        <img
          src={logo}
          style={{ width: "100px", height: "auto", paddingBottom: "20px" }}
          alt=''
        />{" "}
        <span style={{ fontSize: "30px", color: "#58c5f8" }}>Tracker</span>
      </div>
      <Cards country={country} />

      <CountryPicker handleCountryChange={handleCountryChange} />

      <Chart country={country} />
    </div>
  );
}

export default App;
