import React from 'react';
import { createUseStyles } from 'react-jss';
import fetchData from '../../api';

const resource = fetchData('https://valorant-api.com/v1/agents?isPlayableCharacter=true');

function Agents() {
  const res = resource.read();

  return (
    <div>
      <h1>Agents</h1>;
      {res.data.data.map(({ displayName, uuid }) => (
        <p key={uuid}>{displayName}</p>
      ))}
    </div>
  );
}

export default Agents;
