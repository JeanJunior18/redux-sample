import React from 'react';
import { useSelector } from 'react-redux';


function RealTimeBox() {
  const courses = useSelector(state => state.data);

  return <div>
    <span>Componente Course List</span><br/>
      <ul>
        { courses.map(course => <li key={course}>{course}</li>) }
      </ul>
  </div>;
}


export default RealTimeBox;