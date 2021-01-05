import React, { FC } from "react";
import { ISetCallback } from "../../types";

interface ISearch {
  setSearch: ISetCallback<string>;
}

export const Search: FC<ISearch> = ({ setSearch }) => <span>search</span>;

export default Search;
