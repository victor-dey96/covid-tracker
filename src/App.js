import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import InputSelect from "./Components/InputSelect";
import Cards from "./Components/Cards";
import Chart from "react-google-charts";

function App() {
  const [deaths, setDeaths] = useState();
  const [confirmed, setConfirmed] = useState();
  const [recovered, setRecovered] = useState();
  let chk = 5;
  const countryData = (data) => {
    // console.log("data", data);
    // setDeaths(data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    // setConfirmed(data.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    // setRecovered(
    //   data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    // );
    setDeaths(data.deaths);
    setRecovered(data.recovered);
    setConfirmed(data.cases);
  };

  // This should return the confirmed value for any country. Country=input, confirmed cases=output
  return (
    <div className="App">
      <img
        src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/markets/covid-19-s-crop-crisis-pandemic-poses-major-risk-to-asia-s-food-supply-and-trade-expert/10911691-1-eng-GB/COVID-19-s-crop-crisis-Pandemic-poses-major-risk-to-Asia-s-food-supply-and-trade-expert_wrbm_large.jpg"
        alt="Logo"
      ></img>
      <h3>Country Wise cases of Covid-19</h3>
      <InputSelect eachCountryData={countryData} />
      <div className="card_container">
        <Cards
          condition="Deaths"
          text="Number of people that have died of Covid-19"
          data={deaths}
          style={{
            backgroundImage: "linear-gradient( to right, #ff9068, #ff4b1f)",
          }}
        />
        <Cards
          condition="Confirmed"
          text="Number of confirmed cases of Covid-19"
          data={confirmed}
          style={{
            backgroundImage: "linear-gradient( to right, #36D1DC, #5B86E5)",
          }}
        />
        <Cards
          condition="Recovered"
          text="Number of people that have recovered from Covid-19"
          data={recovered}
          style={{
            backgroundImage: "linear-gradient( to left, #56ab2f, #a8e063)",
          }}
        />

        {/* passing a function called countryData as props into inputSelect */}
      </div>
      <div className="chartComponent">
        <Chart
          width={"400px"}
          height={"300px"}
          chartType="PieChart"
          data={[
            ["Task", "Hours per Day"],
            ["Confirmed", confirmed],
            ["Deaths", deaths],
            ["Recovered", recovered],
          ]}
        />
      </div>

      {/* Adding separate cards for each condition (i.e deaths, recovered, and confirmed) */}
    </div>
  );
}

export default App;
