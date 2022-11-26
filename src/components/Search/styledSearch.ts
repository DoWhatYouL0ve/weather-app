import styled from "styled-components";

export const StyledSearch = styled.div`
  position: relative;
  input {
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
  margin-bottom: 44px;
`