import React from 'react';
import Login from './Components/Login';
import Control from './Components/Control';
import 'bootstrap/dist/css/bootstrap.min.css';

// gets "code" value from URL link when user logs in
const code = new URLSearchParams(window.location.search).get('code')

// if there is user authentication, get Control component, if false get Login component
function App() {
  return code ? <Control code={code} /> : <Login />
}

export default App;