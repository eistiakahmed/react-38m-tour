import { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
  // console.log(countriesPromise)
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedCountriesFlag, setVisitedCountriesFlag] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log('CLick Bottom', country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedCountriesFlag = (flags) => {
    const newVisitedCountriesFlag = [...visitedCountriesFlag, flags];
    setVisitedCountriesFlag(newVisitedCountriesFlag);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>In the Countries: { countries.length }</h1>
      <h2>Total Country Visited: { visitedCountries.length }</h2>
      <ol>
        { visitedCountries.map((country) => (
          <li>
            { country.name.common }
          </li>
        )) }
      </ol>
      <h2>Total Flag Visited: { visitedCountriesFlag.length }</h2>
      <div className="visited-flags-container">
        { visitedCountriesFlag.map((flag) => (
          <img key={ flag } src={ flag }></img>
        )) }
      </div>

      <div className="countries">
        { countries.map((country) => (
          <Country
            key={ country.cca3.cca3 }
            country={ country }
            handleVisitedCountries={ handleVisitedCountries }
            handleVisitedCountriesFlag={ handleVisitedCountriesFlag }
          ></Country>
        )) }
      </div>
    </div>
  );
};

export default Countries;
