import React from 'react';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* Navigation bar */}
        <nav className='navbar'>
          {/* Icon */}
          <div className='nav-brend'>
            <Link to = "/">Beste</Link>
          </div>

          <div className='nav-links'>
            <Link to = '/' className = 'nav-link'>Recomendations</Link>
            <Link to = '/' className = 'nav-link'>Genre</Link>
            <Link to = '/' className = 'nav-link'>Authors</Link>
            <Link to = '/' className = 'nav-link'>Log in</Link>
            <Link to = '/' className = 'nav-link'>Reg on</Link>
          </div>

          <div className='content'>
            <Routers>
              <Route path = '/' element = {<MainPage />} />
            </Routers>
          </div>

        </nav>

      </div>

      <style jsx>{`
        .app-container {
          min-height: 100px;
          display: flex;
          flex-direction: column;
        }

        .navbar {
          bacground-color: #2c7777
          color:black;
          display: flex;
          justify-content: space-between;
          aligh-items: center;
          padding: 0 50px;
          height: 70px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position; realtive
        }
        `
      }
      </style>
    </Router>
  )
}

export default App;