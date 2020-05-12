import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



function InputBox() {
  const name = useSelector(state => state.name);
  const dispatch = useDispatch()


  function addCourse(e){
    e.preventDefault()
    dispatch({ type: 'ADD_COURSE', title: name });
    dispatch({type: 'change_name', name: ''});
  }

  function handleKeyUp(e){
    dispatch({type: 'change_name', name: e.target.value});
  }

  return <div>
      <span>Add Course</span><br/>
      <form onSubmit={addCourse}>
      <input type="text" name="name" id="name" onChange={handleKeyUp} value={name} autoComplete='off' /> 
      <button type='submit' onClick={addCourse}>Add</button>
      </form>
  </div>;
}

export default InputBox;