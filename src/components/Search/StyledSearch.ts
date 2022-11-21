import styled from "styled-components";

export const StyledSearch = styled.div`
  position: relative;
  input {
    border: 1px dashed black;
    width: 400px;
    padding: 8px 8px 8px 25px ;
    border-radius: 10px;
  }
  label {
    font-size: 0.6em;
    position: absolute;
    top: -10px;
    left: 20px;
    background-color: white;
    padding: 0 5px;
  }
  .searchIcon {
    position: absolute;
    top: 10px;
    left: 5px;
    opacity: 0.5;
  }
`