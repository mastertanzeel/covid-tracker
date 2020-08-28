import React, { useState, useEffect } from "react";
import { Cards, Chart, CountryPicker } from "../../Components";
import styles from "../../App.module.css";
import { fetchData } from "../../api/index";
import coronaImage from "../../assets/image.png";

export default function Home() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(async () => {
    const fetchedData = await fetchData();
    setData(fetchedData);
  }, []);
  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} style={{marginTop: '-50px'}} src={coronaImage} alt="COVID-19" />
      <text style={{marginTop: '-50px'}}>
        <b>COVID-19 statistics worldwide</b>
      </text>
      <text>
        <i>(For a Particlar select a Country from below)</i>
      </text>
      <Cards data={data} country={country} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}
