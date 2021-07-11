import React from "react";
import { Select } from "@material-ui/core";
import { useState, useEffect } from "react";
import "./InputSelect.css";

function InputSelect({ eachCountryData }) {
  //destructuring the props

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Afghanistan");

  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map((country) => ({
            id: country.country,
            value: country.country,
            key: country.countryInfo.iso2,
            cases: country.cases,
            deaths: country.deaths,
            recovered: country.recovered,
          }));
          setCountries(countries); // contains all the data for all the countries
          eachCountryData(...countries.filter((item) => item.id === country)); //defining what eachCountryData does
        });
    };
    getCountries();
  }, [country]);
  //   console.log(countries[0].id);
  const handleChange = (e) => {
    setCountry(e.target.value); // contains state for selected country as input
  };

  return (
    <div className="selectOption">
      <Select
        defaultValue={"Afghanistan"}
        className="actualSelectOption"
        onChange={handleChange}
      >
        {countries.map((country) => (
          <option
            className="selectOption"
            value={country.value}
            key={country.id}
          >
            {country.value}
          </option>
        ))}
        {/* {} */}
      </Select>
    </div>
  );
}

export default InputSelect;
