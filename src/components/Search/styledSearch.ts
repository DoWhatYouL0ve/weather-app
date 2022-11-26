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
    top: 10px;
    left: 5px;
    opacity: 0.5;
  }
`

export const StyledSearchWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
`