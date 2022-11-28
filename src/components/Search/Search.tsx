import {StyledSearch, StyledSearchWrapper} from "./styledSearch";
import { BiSearch } from 'react-icons/bi'
import {ChangeEvent, useEffect, useState} from "react";
import {useDebounce} from "./hook/useDebounce";
import {useAppDispatch, useAppSelector} from "../../appState/hooks/appHooks";
import {getCities, getCurrentCityWeather} from "../../appState/appReducer";
import {SearchSelect} from "./select/SearchSelect";
import { StyledSearchSelectWrapper } from "./select/styledSearchSelect";
import {SearchSelectItemType} from "../../api/cityAPI";

export const Search = () => {
    const dispatch = useAppDispatch()
    const cities = useAppSelector(store => store.app.citiesData)

    const [chosenCity, setChosenCity] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const [first, setFirst] = useState<boolean>(true)
    const debouncedValue = useDebounce<string>(value, 700)
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChosenCity(true)
        setValue(e.target.value)
    }

    const onClickHandler = (item: SearchSelectItemType) => {
        setChosenCity(false)
        setValue(`${item.city}, ${item.region}`)
        dispatch(getCurrentCityWeather({lat: item.latitude, lon: item.longitude}))
    }

    useEffect(()=>{
        if(!first) {
            dispatch(getCities(value))
        }else {
            dispatch(getCurrentCityWeather({lat: 39.47, lon: -0.376388888}))
            setFirst(false)
        }
    }, [debouncedValue])

  return (
      <StyledSearchWrapper>
          <StyledSearch>
              <BiSearch className={'searchIcon'} />
              <input type={'search'} placeholder={'type your city name here...'} onChange={onChangeValueHandler} value={value}/>
          </StyledSearch>
          {value && chosenCity && <StyledSearchSelectWrapper>
              {cities.map(i => <SearchSelect key={i.id} item={i} onClickHandler={()=>onClickHandler(i)}/>)}
          </StyledSearchSelectWrapper>}
      </StyledSearchWrapper>
  )
}