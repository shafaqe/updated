import { getAuth, signOut } from '@firebase/auth';
import React, { useEffect } from 'react';
import './Dashboard.css';

const Dashboard = ({ history }) => {
    const logout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('token')
                history.push('/')
            })
            .catch((e) => alert(e.message))
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            history.push('/')
        }
    },[])

    const auth = getAuth();
    const user = auth.currentUser;

    return (
      <div className=' grid-container '>
        <aside className='sidenav'>
          <h1>dashboard</h1>
          <nav>
            <a class='links selected' href='#'>
              <i class='fa fa-fw fa-home'></i> Home
            </a>
            <a class='links' href='#'>
              {' '}
              <i class='fa fa-fw fa-user'></i> Notes{' '}
            </a>
            <a class='links' href='#'>
              <i class='fa fa-user-circle-o' aria-hidden='true'></i> Calender
            </a>
            <a class='links' href='#'>
              <i class='fa fa-fw fa-envelope'></i> Weather
            </a>
            <a class='links' href='#'>
              <i class='fa fa-info-circle' aria-hidden='true'></i> Food
            </a>
            <a class='links' href='#'>
              <i class='fa fa-info-circle' aria-hidden='true'></i> More Info
            </a>
          </nav>
        </aside>
        <header className='header'>
          <p>{user && user.displayName}</p>
          <button onClick={logout} className='btn-color'>
            Logout
          </button>
        </header>
        <main class='main'>
        </main>
      </div>
    );
}

export default Dashboard;
