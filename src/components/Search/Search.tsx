import {StyledSearch} from "./StyledSearch";
import { BiSearch } from 'react-icons/bi'
import {ChangeEvent, useEffect, useState} from "react";
import {useDebounce} from "./hook/useDebounce";

export const Search = () => {
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(value, 700)
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(()=>{

    }, [debouncedValue])

  return (
      <StyledSearch>
          <label htmlFor={'search'}>{'City Name'}</label>
          <BiSearch className={'searchIcon'} />
          <input id={'search'} type={'search'} placeholder={'type here...'} onChange={onChangeValueHandler} value={value}/>
      </StyledSearch>
  )
}