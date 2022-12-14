import styled from "styled-components";

export const StyledCurrentWeather = styled.div`
  min-height: 660px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  padding: 20px 0;
  color: white;
  .todayWeatherBox {
    width: 400px;
    height: 210px;
    padding: 5px 8px;
    margin: 20px auto;
    background-image: linear-gradient(to left, #656769 0%, black 100%);
    border-radius: 5px;
    .top {
      display: flex;
      justify-content: space-between;
      height: 80px;
      img {
        width: 80px;
        height: 80px;
        margin: 0;
      }
      .topLeft {
        text-align: left;
        width: 304px;
      }
      .city {
        margin-top: 5px;
        font-size: 2rem;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .weatherDescription {
        font-size: 0.8rem;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      height: 120px;
      .temperature {
        width: 132px;
        line-height: 120px;
        font-weight: bold;
        font-size: 4.5rem;
      }
      .weatherDetailsWrapper {
        width: 100%;
        margin-left: 10px;
        h5 {
          margin-bottom: 7px;
        }
        .details {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          margin-bottom: 2px;
        }
      }
    }
  }
`