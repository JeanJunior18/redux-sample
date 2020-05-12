import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import InputBox from './components/InputBox';
import RealTimeBox from './components/RealTimeBox';
import ListBox from './components/ListBox';

import './App.css';

function App() {
  return (
    <Provider store={store}>

      <div className="components">
        <h1>React Hooks Redux </h1>

        <ListBox />
        <RealTimeBox />
        <InputBox />
      </div>
    </Provider>
  );
}

export default App;
