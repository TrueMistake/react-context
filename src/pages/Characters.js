import React from 'react';
import * as characters from '../api/characters.json'
import {Link, useSearchParams} from "react-router-dom";
import {sortASC} from "../helper/helper";
import Select from "../components/Select/Select";

const Characters = () => {
  const [searchParams, setSearchParams] = useSearchParams({sort: 'asc'});
  const charactersSort = sortASC(characters.default, searchParams.get('sort'));

  const changeSort = (val) => {
    setSearchParams({sort: val})
  }

  return (
    <div>
      <Select sort={changeSort} val={searchParams.get('sort')}/>
      <div className="">
        {charactersSort.map(item => (
          <Link to={`/characters/${item.id}`} className="block" key={item.id}>
            <img src={item.image} alt=""/>
            <div className="text"><span>Имя:</span> {item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Characters;