import React from 'react';
import * as location from '../api/location.json'
import {useParams} from "react-router-dom";
import {formatDate} from "../helper/helper";

const LocationDetail = () => {
  const {id}  = useParams();
  const item = location.default.find(el => el.id === +id);

  return (
    <div className="block">
      <div className=""><span>Названия:</span> {item.name}</div>
      <div className=""><span>Тип:</span> {item.type}</div>
      <div className=""><span>Изменения:</span> {item.dimension}</div>
      <div className=""><span>Дата создания:</span> {formatDate(item.created)}</div>
    </div>
  );
};

export default LocationDetail;