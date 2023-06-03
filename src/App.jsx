import Search from "./components/search"
import CurrentWeather from "./components/current-weather/current-weather"
import Forecast from "./components/forecast/current-forecast"
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api"
import { useState } from "react"

function App() {
  const [currweather, setcurrWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData)=>{
    const [latitude, longitude] = searchData.value.split(" ")
    const currentWeatherFetch =  fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
    const currentForecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch,currentForecastFetch])
    .then(async (reponse)=>{

      const weatherResponse = await reponse[0].json();
      const forecastResponse = await reponse[1].json();
      setcurrWeather({city:searchData.label, ...weatherResponse})
      setForecast({city:searchData.label, ...forecastResponse})
      

    }).catch((err)=> console.log(err))
  }
  console.log(forecast)
  return (
    <div className=" font-roboto flex flex-col items-center gap-8 bg-slate-200 h-screen">
      <Search onSearchChange={handleOnSearchChange}/>
      {currweather && <CurrentWeather data = {currweather}/>}
      {forecast && <Forecast data = {forecast}/>}
    </div>
  )
}

export default App
