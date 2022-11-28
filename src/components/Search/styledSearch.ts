import styled from "styled-components";

export const StyledSearch = styled.div`
  position: relative;
  input {
    font-family: 'Patrick Hand', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    border: 1px solid black;
    width: 100%;
    padding: 8px 8px 8px 25px ;
    border-radius: 5px;
  }
  .searchIcon {
    position: absolute;
    top: 12px;
    left: 5px;
    opacity: 0.5;
  }
  .loader-line {
    width: 1076px;
    height: 3px;
    position: absolute;
    top: -100px;
    left: 2px;
    overflow: hidden;
    background-color: #ddd;
    margin: 100px auto;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }

  .loader-line:before {
    content: "";
    position: absolute;
    left: -50%;
    height: 3px;
    width: 40%;
    background-color: coral;
    -webkit-animation: lineAnim 1s linear infinite;
    -moz-animation: lineAnim 1s linear infinite;
    animation: lineAnim 1s linear infinite;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }

  @keyframes lineAnim {
    0% {
      left: -40%;
    }
    50% {
      left: 20%;
      width: 80%;
    }
    100% {
      left: 100%;
      width: 100%;
    }
  }
`

export const StyledSearchWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
`