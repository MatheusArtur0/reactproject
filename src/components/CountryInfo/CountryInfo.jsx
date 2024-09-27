import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { apiURL } from '../util/api';

const CountryInfo = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${countryName}`);
  
        if (!res.ok) throw new Error('Could not found!');
  
        const data = await res.json();
  
        setCountry(data[0]);
        setIsLoading(false);
  
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName()
  }, [countryName]);

  return ( 
    <div className="country_info_wrapper">
      <div className="back_button">
        <Link to='/'>
          <button>&larr; Voltar</button>
        </Link>
      </div>

      {isLoading && !error && <h4>Carregando...</h4>}
      {error && !isLoading && <h4>{error}</h4>}

      {country && (
        <div className="country_info_container">
          <div className="country_info-img">
            <img src={country.flags.png} alt={`Bandeira de ${country.name.common}`} />
          </div>

          <div className="country_info">
            <h3>{country.name.common}</h3>

            <div className="country_info-left">
              <h5>População: <span>{new Intl.NumberFormat().format(country.population)}</span></h5>
              <h5>Região: <span>{country.region}</span></h5>
              <h5>Sub Região: <span>{country.subregion}</span></h5>
              <h5>Capital: <span>{country.capital}</span></h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;