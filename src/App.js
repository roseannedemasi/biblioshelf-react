import './App.css';
import Header from './components/header';

import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='container'>
        <Home />
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default Home;