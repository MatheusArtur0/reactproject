import "./App.css";
import {Routes, Route} from 'react-router-dom';
import AllCountries from './components/AllCountries/AllCountries';
import CountryInfo from './components/CountryInfo/CountryInfo';


function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h3>Aqui estão os países do mundo</h3>
        </div>
      </div>
     <div className="container">
       <Routes>
         <Route path='/'  element={<AllCountries />} />
         <Route path='/country/:countryName' element={<CountryInfo />} />
       </Routes>
      </div>
   </>
  );
}

export default App;