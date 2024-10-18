
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Darkmode from './Darkmode';

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [getDrop, setDrop] = useState('ALL');

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  }

  useEffect(() => {
    getData();
  }, []);


  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div style={{
    }}
    >
      <div style={{
        textAlign: 'center',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '70px',
        paddingBottom:'40px'
      }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <div> <h1>Country World's</h1></div>
          <div>
            <Darkmode />
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <div>  <input
            type="text"
            placeholder="Search by country name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '200px',
              height: '30px',
              textAlign: 'center'
            }}
          /></div>
          <div>
            <select
              value={getDrop}
              onChange={(val) => {
                setDrop(val.target.value);
              }}
            >
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>




      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', color: 'black' }}>
        {filteredCountries.map((country) => {
          return (
            <Link to={`/about/${country.cca2}`} style={{ textDecoration: 'none' }} key={country.cca3}>

              <div
                key={country.cca3}
                style={{
                  border: '1px solid red',
                  margin: '20px',
                  padding: '0px',
                  width: '290px',
                  textAlign: 'center',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={country.flags.svg}
                  alt={`${country.name.common} flag`}
                  style={{
                    width: '104%',
                    height: '220px',
                    objectFit: 'cover',
                    borderRadius: '20px 20px 0 0'
                  }}
                />
                <div style={{
                  backgroundColor: 'white',
                  boxShadow: '0 25px 50px -12px rgba(0 ,0, 0, 0.25)',
                  borderBottomRightRadius: '1.5rem',
                  borderBottomLeftRadius: '1.5rem',
                  padding: '1rem',
                  color: 'black'
                }}>
                  <h2><strong>{country.name.common}</strong></h2>

                  <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                  <p>Population: {country.population.toLocaleString()}</p>
                  <h3 style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#eef2ff', borderRadius: '1rem', textAlign: 'center' }}>
                    Region: {country.region}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      </div>

    </>
  );
}

export default App;
