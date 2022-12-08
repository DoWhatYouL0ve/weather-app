import styled from "styled-components";

export const StyledForecastWeather = styled.div`
  .title {
    color: white;
    text-align: left;
    padding-left: 50px;
    margin-bottom: 10px;
  }
  .itemAccordionWrapper {
    height: 40px;
    background-color: grey;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
    }
    .leftWrapper {
      display: flex;
      height: 40px;
      margin-left: 10px;
      .img {
        width: 40px;
        height: 40px;
        margin-left: 10px;
      }
      .dayOfTheWeek {
        font-weight: bold
      }
    }
    .dayOfTheWeek, .descriptionForecast, .maxTempForecast {
      display: inline-block;
      margin-left: 20px;
      line-height: 40px;
    }
    .descriptionForecast, .maxTempForecast {
      font-size: 0.8rem;
    }
    .rightWrapper {
      margin-right: 10px;
    }
  }
  .forecastDetails {
    height: 100px;
    display: flex;
    flex-direction: row;
    .leftDescription, .rightDescription {
      width: 50%;
      padding: 5px;
      .propertyContainer {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
    }
  }
`

export const StyledForecastWeatherWrapper = styled.div`
  text-align: left;
`