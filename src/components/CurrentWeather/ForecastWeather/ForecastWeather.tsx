import {StyledForecastWeather} from "./styles/StyledForecastWeather";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import {useAppSelector} from "../../../hooks/appHooks";

const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const ForecastWeather = () => {

    const dayInAWeek = new Date().getDay()
    const forecastsDays = WEEK.slice(dayInAWeek, WEEK.length).concat(WEEK.slice(0, dayInAWeek))

    const forecastWeather = useAppSelector(store => store.app.weather.forecastWeather)

 return (
     <>
         <StyledForecastWeather>
             <h2 className={'title'}>Daily Weather Forecast</h2>
             <Accordion allowZeroExpanded>
                 {forecastWeather.list.slice(0,7).map((item, idx)=>(
                     <AccordionItem key={idx}>
                         <AccordionItemHeading>
                             <AccordionItemButton>
                                 <div className={'itemAccordionWrapper'}>
                                     <div className={'leftWrapper'}>
                                         <img alt={'weather img'} className={'smallIcon'} src={`icons/${item.weather[0].icon}.png`}/>
                                         <div className={'dayOfTheWeek'}>{forecastsDays[idx]}</div>
                                     </div>
                                     <div className={'rightWrapper'}>
                                         <div className={'descriptionForecast'}>{item.weather[0].description}</div>
                                         <div className={'maxTempForecast'}>average temp: {Math.round(item.main.temp_max)}&#176;C</div>
                                     </div>
                                 </div>
                             </AccordionItemButton>
                         </AccordionItemHeading>
                         <AccordionItemPanel>
                             <div className={'forecastDetails'}>
                                 <div className={'leftDescription'}>
                                     <div className={'propertyContainer'}>
                                         <div>{'Feels like:'}</div>
                                         <div>{Math.round(item.main.feels_like)}&#176;C</div>
                                     </div>
                                     <div className={'propertyContainer'}>
                                         <div>{'Clouds:'}</div>
                                         <div>{item.clouds.all}%</div>
                                     </div>
                                     <div className={'propertyContainer'}>
                                         <div>{'Sea level:'}</div>
                                         <div>{item.main.sea_level}m</div>
                                     </div>
                                 </div>
                                 <div className={'rightDescription'}>
                                     <div className={'propertyContainer'}>
                                         <div>{'Humidity:'}</div>
                                         <div>{item.main.humidity}%</div>
                                     </div>
                                     <div className={'propertyContainer'}>
                                         <div>{'Wind speed:'}</div>
                                         <div>{item.wind.speed}m/s</div>
                                     </div>
                                     <div className={'propertyContainer'}>
                                         <div>{'Pressure:'}</div>
                                         <div>{item.main.pressure}hPa</div>
                                     </div>
                                 </div>
                             </div>
                         </AccordionItemPanel>
                     </AccordionItem>
                 ))}
             </Accordion>
         </StyledForecastWeather>
     </>
 )
}