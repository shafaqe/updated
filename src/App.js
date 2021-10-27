import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAcgq_tYiMDjPzgp63yyI97sY75Cn2Lwdg',
  authDomain: 'authentication-developme-1d622.firebaseapp.com',
  projectId: 'authentication-developme-1d622',
  storageBucket: 'authentication-developme-1d622.appspot.com',
  messagingSenderId: '1068667680525',
  appId: '1:1068667680525:web:4346899811eb252d462244',
};

initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
