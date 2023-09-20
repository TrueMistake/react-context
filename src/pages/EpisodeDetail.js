import React from 'react';
import {useParams} from "react-router-dom";
import * as episode from "../api/episode.json";
import {formatDate} from "../helper/helper";

const EpisodeDetail = () => {
  const {id}  = useParams();
  const item = episode.default.find(el => el.id === +id);

  return (
    <div className="block">
      <div className=""><span>Название:</span> {item.name}</div>
      <div className=""><span>Дата выхода:</span> {item.air_date}</div>
      <div className=""><span>Номер эпизода:</span> {item.episode}</div>
      <div className=""><span>дата создания:</span> {formatDate(item.created)}</div>
    </div>
  );
};

export default EpisodeDetail;