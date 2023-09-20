import React from 'react';
import * as location from '../api/location.json'
import {Link, useSearchParams} from "react-router-dom";
import Select from "../components/Select/Select";
import {sortASC} from "../helper/helper";

const Location = () => {
  const [searchParams, setSearchParams] = useSearchParams({sort: 'asc'});
  const locationSort = sortASC(location.default, searchParams.get('sort'));

  const changeSort = (val) => {
    setSearchParams({sort: val})
  }

  return (
    <div>
      <Select sort={changeSort} val={searchParams.get('sort')}/>
      {locationSort.map(item => (
        <Link to={`/location/${item.id}`} key={item.id} className="block">
          <div className="text"><span>Название:</span> {item.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Location;