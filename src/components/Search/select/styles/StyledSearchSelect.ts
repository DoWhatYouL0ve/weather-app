import styled from "styled-components";

export const StyledSearchSelectWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
`

export const StyledSearchItemSelect = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 5px 2px 25px;
  &&:hover {
    cursor: pointer;
    background-color: aquamarine;
  }
`