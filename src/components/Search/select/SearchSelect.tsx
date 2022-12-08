import { StyledSearchItemSelect } from "./styles/StyledSearchSelect"
import {SearchSelectItemType} from "../../../api/cityAPI";


type SearchSelectPropsType = {
    item: SearchSelectItemType
    onClickHandler: () => void
}

export const SearchSelect = (props: SearchSelectPropsType) => {
    
    const onClickHandler = () => {
        props.onClickHandler()
    }
    
    return (
          <StyledSearchItemSelect onClick={onClickHandler}>
              <span>{props.item.city}, {props.item.region}</span>
              <span>{props.item.country}</span>
          </StyledSearchItemSelect>
    )
}