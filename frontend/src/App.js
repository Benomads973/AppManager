// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
// import RegisterForm from './components/RegisterForm';
//import LoginForm from './components/LoginForm';
import FormTextExample from './components/FormTextExample';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const formatPres = {
    padding: "0 30px"
  }
  
  /*<RegisterForm style={formatPres} />*/
  return (
    <Provider store={store}>
      <div>
        <h1 style={formatPres}>Secure Apps</h1>
        <FormTextExample />
      </div>
    </Provider>
  );
};

export default App;
