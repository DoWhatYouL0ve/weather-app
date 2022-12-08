import {StyledCurrentWeather} from "./styles/StyledCurrentWeather";
import {useAppSelector} from "../../hooks/appHooks";
import {StyledForecastWeatherWrapper} from "./ForecastWeather/styles/StyledForecastWeather";
import {ForecastWeather} from "./ForecastWeather/ForecastWeather";
import {Loading} from "../common/Loader/InitialLoader";

export const CurrentWeather = () => {

    const cityWeatherData = useAppSelector(store => store.app.weather.currentCityWeather)
    const isLoading = useAppSelector(store => store.app.status)

  return (
      <>
          <StyledCurrentWeather>
              {isLoading ?
                  <Loading/> :
                  <div>
                      <div className={'todayWeatherBox'}>
                          <div className={'top'}>
                              <div className={'topLeft'}>
                                  <div className={'city'}>{cityWeatherData.name}</div>
                                  <div className={'weatherDescription'}>{cityWeatherData.weather[0].description}</div>
                              </div>
                              <div className={'topRight'}>
                                  <img src={`icons/${cityWeatherData.weather[0].icon}.png`} alt="weather img"/>
                              </div>
                          </div>
                          <div className={'bottom'}>
                              <div className={'temperature'}>
                                  {Math.round(cityWeatherData.main.temp)}&#176;C
                              </div>
                              <div className={'weatherDetailsWrapper'}>
                                  <h5>Details</h5>
                                  <div className={'details'}>
                                      <span>Feels like</span>
                                      <span>{Math.round(cityWeatherData.main.feels_like)}&#176;C</span>
                                  </div>
                                  <div className={'details'}>
                                      <span>Wind</span>
                                      <span>{cityWeatherData.wind.speed} m/s</span>
                                  </div>
                                  <div className={'details'}>
                                      <span>Humidity</span>
                                      <span>{cityWeatherData.main.humidity + ' %'}</span>
                                  </div>
                                  <div className={'details'}>
                                      <span>Pressure</span>
                                      <span>{cityWeatherData.main.pressure} hPa</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <StyledForecastWeatherWrapper>
                          <ForecastWeather/>
                      </StyledForecastWeatherWrapper>
                  </div>}
        </StyledCurrentWeather>
      </>
  )
}