import "./App.css";
import { Routes, Route } from 'react-router-dom';
import AllCountries from './components/AllCountries/AllCountries';
import CountryInfo from './components/CountryInfo/CountryInfo';
import logo from './img/logo1.png';


function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-logo">
            <img src={logo} alt="logo1.png" />
          </div>
          <h3>Aqui estão os países do mundo</h3>
        </div>
      </div>
      <div className="main-content">
        <div className="container">
          <Routes>
            <Route path='/' element={<AllCountries />} />
            <Route path='/country/:countryName' element={<CountryInfo />} />
          </Routes>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 CountriesList - Por Matheus.</p>
        </div>
      </footer>
    </>
  );
}

export default App;