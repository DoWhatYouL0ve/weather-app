import { StyledSearchItemSelect } from "./styledSearchSelect"


type SearchSelectPropsType = {
    city: string
    country: string
    region: string
}

export const SearchSelect = (props: SearchSelectPropsType) => {
    return (
          <StyledSearchItemSelect>
              <span>{props.city}, {props.region}</span>
              <span>{props.country}</span>
          </StyledSearchItemSelect>
    )
}