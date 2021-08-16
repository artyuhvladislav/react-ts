import { useLazyQuery } from '@apollo/client';
import React from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import CitiesWeather from './components/CitiesWeather';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import { cityWeather } from './API/query';
import SignIn from './components/SignIn';




export interface ICity {
  name: string,
  id: number,
  weather: {
    summary: {
      title: string
    }
    temperature: {
      actual: number
    }
  }
}


const App: React.FC = () => {
  const [userData, setUserData] = React.useState({ name: '', email: '', isFormShow: false, isSign: false})

  const [cities, setCities] = React.useState<ICity[]>([])
  const [searchedCity, setSearchedCity] = React.useState("");
 
  const [ getWeather, { loading } ] = useLazyQuery(cityWeather, {
     
      onCompleted: ({ getCityByName }: any) => { 
      
      if(!getCityByName) {
        alert(`No data for ${searchedCity}`)
        setSearchedCity('')
        return
      }

      setCities((prevState) => {
        const newCities = prevState.filter( city => city.name !== searchedCity)
        return [...newCities, getCityByName]
      })
      setSearchedCity('')
    }
  }) ;
 

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      getWeather({ variables: { name: searchedCity } })
    }
  };
 
  return (
    <div className="container">
      <Navbar userData={userData} setUserData={setUserData} />
      <div className="container">
        
        <SearchForm keyPressHandler={keyPressHandler} searchedCity={searchedCity} setSearchedCity={setSearchedCity} />
        <CitiesWeather cities={cities} loading={loading} />
      </div>
      {userData.isFormShow && <SignIn setUserData={setUserData} /> }
    </div>
  );
}

export default App;
