import React from 'react';
import {useParams} from "react-router-dom";
import * as characters from "../api/characters.json";
import {formatDate, sortASC} from "../helper/helper";

const CharactersDetail = () => {
  const {id}  = useParams();
  const item = characters.default.find(el => el.id === +id);

  sortASC(characters.default)

  return (
    <div className="block">
      <img src={item.image} alt=""/>
      <div className=""><span>Статус:</span> {item.status}</div>
      <div className=""><span>Вид:</span> {item.species}</div>
      <div className=""><span>Имя:</span> {item.name}</div>
      {item.type
        ? <div className=""><span>Тип:</span> {item.type}</div>
        : null
      }
      <div className=""><span>Пол:</span> {item?.gender}</div>
      <div className=""><span>Дата создания:</span> {formatDate(item.created)}</div>
    </div>
  );
};

export default CharactersDetail;