import { useState } from 'react';
import './Country.css';

const Country = ({ country,handleVisitedCountries,handleVisitedCountriesFlag}) => {
  // console.log(country.currencies.currencies);
  
  
  const [visited, setVisited] = useState(false);

  const handleVisitBtn = () => {
    // if(visited){ 
    //   setVisited(false);
    // }else{
    //   setVisited(true);
    // }

    // setVisited(visited? false: true)
    setVisited(!visited);
    handleVisitedCountries(country)
    
  };

  const currenciesObj = country.currencies.currencies;
  const currenciesList = currenciesObj
    ? Object.values(currenciesObj)
      .map((c) => `${c.name} (${c.symbol})`)
      .join(', ')
    : 'N/A';
  // const languagesObj = country.languages.languages;
  // const languageList = languagesObj
  //   ? Object.values(languagesObj).join(', ')
  //   : 'N/A';
  return (
    <>
      <div className={ `country ${visited && "countryVisited"}` }>
        <img
          src={ country?.flags?.flags?.png }
          alt={ country.flags.flags.alt }
          className="imgSize"/>

        <h3>{ country.name.common }</h3>
        {/* <p>Languages: {languageList}</p> */ }
        <p>Population: { country.population.population }</p>
        <p>Region: { country.region.region }</p>
        <p>Currencies: { currenciesList }</p>
        <p>
          Area: { country.area.area }{ ' ' }
          { country.area.area > 300000 ? '( Big Country )' : '( Small Country )' }
        </p>

        <div>
          <button onClick={ handleVisitBtn }>
            { visited ? 'Visited' : 'Not Visited' }
          </button>
          <button onClick={()=> {handleVisitedCountriesFlag(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
      </div>
    </>
  );
};

export default Country;
