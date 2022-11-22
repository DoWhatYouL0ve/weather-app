import {StyledSearch, StyledSearchWrapper} from "./styledSearch";
import { BiSearch } from 'react-icons/bi'
import {ChangeEvent, useEffect, useState} from "react";
import {useDebounce} from "./hook/useDebounce";
import {useAppDispatch, useAppSelector} from "../../appState/hooks/appHooks";
import {getCities} from "../../appState/appReducer";
import {SearchSelect} from "./select/SearchSelect";
import { StyledSearchSelectWrapper } from "./select/styledSearchSelect";

type SearchPropsType = {
    onSearchChange: (searchData: string) => void
}

export const Search = ({onSearchChange}:SearchPropsType) => {
    const dispatch = useAppDispatch()
    const cities = useAppSelector(store => store.app.citiesData)
    console.log(cities)

    const [value, setValue] = useState<string>('')
    const [first, setFirst] = useState<boolean>(true)
    const debouncedValue = useDebounce<string>(value, 700)
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onSearchChange(e.target.value)
    }

    useEffect(()=>{
        if(!first) {
            dispatch(getCities(value))
        }else {
            setFirst(false)
        }
    }, [debouncedValue])

  return (
      <StyledSearchWrapper>
          <StyledSearch>
              <BiSearch className={'searchIcon'} />
              <input type={'search'} placeholder={'type your city name here...'} onChange={onChangeValueHandler} value={value}/>
          </StyledSearch>
          {value && <StyledSearchSelectWrapper>
              {cities.map(i => <SearchSelect key={i.id} city={i.city} country={i.country} region={i.region}/>)}
          </StyledSearchSelectWrapper>}
      </StyledSearchWrapper>
  )
}