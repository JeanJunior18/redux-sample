import React from 'react';
import {  useSelector } from 'react-redux';


function ListBox() {
  const name = useSelector(state => state.name);
  return <div>
      <span>Component Real Time Text</span> <br />
      <br />
      {name}
  </div>;
}

export default ListBox;