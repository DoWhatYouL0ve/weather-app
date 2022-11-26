import {StyledCurrentWeather} from "./styledCurrentWeather";
import icon from './../../images/icons/01d.png'

export const CurrentWeather = () => {
  return (
      <>
        <StyledCurrentWeather>
            <div className={'todayWeatherBox'}>
                <div className={'top'}>
                    <div className={'topLeft'}>
                        <div className={'city'}>New York</div>
                        <div className={'weatherDescription'}>Sunny</div>
                    </div>
                    <div className={'topRight'}>
                        <img src={icon} alt="weather img"/>
                    </div>
                </div>
                <div className={'bottom'}>
                    <div className={'temperature'}>
                        22&#176;C
                    </div>
                    <div className={'weatherDetailsWrapper'}>
                        <h5>Details</h5>
                        <div className={'details'}>
                            <span>Feels like</span>
                            <span>22&#176;C</span>
                        </div>
                        <div className={'details'}>
                            <span>Wind</span>
                            <span>2.06 m/s</span>
                        </div>
                        <div className={'details'}>
                            <span>Humidity</span>
                            <span>78%</span>
                        </div>
                        <div className={'details'}>
                            <span>Pressure</span>
                            <span>115 hPa</span>
                        </div>
                    </div>
                </div>
            </div>
        </StyledCurrentWeather>
      </>
  )
}