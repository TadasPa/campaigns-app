import React, { ChangeEvent, FC } from "react";
import styled, { css } from "styled-components";
import { ISetCallback } from "../../types";

interface ISearch {
  search?: string;
  setSearch: ISetCallback<string>;
  placeholder?: string;
}

const Search: FC<ISearch> = ({ search, setSearch, placeholder, ...rest }) =>
{
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    return setSearch(event.target.value)
  };
  return (<input type="text" placeholder={placeholder} value={search} onChange={handleChange} {...rest} />);
};

const StyledSearch = styled(Search) <ISearch>`
  padding: 5px;

  ${({ theme: { textStyles: { small } } })=>css`
    font-family: ${small.fontFamily};
    font-size: ${small.fontSize};
    line-height: ${small.lineHeight};
  `}
  
`

export default StyledSearch;
