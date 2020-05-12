import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [],
  name: '',
}

function courses(state = INITIAL_STATE, action) {
  switch (action.type){
    case 'ADD_COURSE':
      return {...state, data: [...state.data, action.title]};
    case 'change_name':
      return {...state, name: action.name}
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;