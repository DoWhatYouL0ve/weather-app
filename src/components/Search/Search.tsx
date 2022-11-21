import {StyledSearch} from "./StyledSearch";
import { BiSearch } from 'react-icons/bi'
import {ChangeEvent, useState} from "react";

export const Search = () => {
    const [value, setValue] = useState<string>('')

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

  return (
      <StyledSearch>
          <label htmlFor={'search'}>{'City Name'}</label>
          <BiSearch className={'searchIcon'} />
          <input id={'search'} type={'search'} placeholder={'type here...'} onChange={onChangeValueHandler} value={value}/>
      </StyledSearch>
  )
}