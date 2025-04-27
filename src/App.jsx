import { Routes, Route, NavLink, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';
import Theory from './components/Theory.jsx';
import Practice from './components/Practice.jsx';
import TodoList from './components/TodoList.jsx';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <header className="app-header">
          <div className="header-content">
            <Link to="/" className="logo-container">
            <svg className="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
    <circle cx="50" cy="50" r="25" fill="white"/>
    <path d="M42 40 L35 50 L42 60" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M58 40 L65 50 L58 60" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  <div className="logo-text">
    <div className="logo-title">DevLearn</div>
    <div className="logo-subtitle">Практика программирования</div>
  </div>
              {/* <div className="logo-text">
                <h1>&lt;DEV/&gt;</h1>
                <p>Code • Learn • Grow</p>
              </div> */}
            </Link>
          </div>
        </header>
          
        <main className="app-main">
          <nav className="app-navigation">
            <NavLink to="/" className="nav-link" activeclassname="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
              </svg>
              <span>Главная</span>
            </NavLink>
            <NavLink to="/theory" className="nav-link" activeclassname="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"/>
              </svg>
              <span>Теория</span>
            </NavLink>
            <NavLink to="/practice" className="nav-link" activeclassname="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd"/>
              </svg>
              <span>Практика</span>
            </NavLink>
            <NavLink to="/quiz" className="nav-link" activeclassname="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"/>
              </svg>
              <span>Тесты</span>
            </NavLink>
            <NavLink to="/project/todo" className="nav-link" activeclassname="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd"/>
              </svg>
              <span>Todo</span>
            </NavLink>
          </nav>
            
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/theory" element={<Theory />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/project/todo" element={<TodoList />} />
            </Routes>
          </div>
        </main>
          
        <footer className="app-footer">
          <p>© {new Date().getFullYear()} &lt;DEV/&gt;. Все права защищены.</p>
          <div className="footer-links">
            <Link to="/privacy">Политика конфиденциальности</Link>
            <Link to="/terms">Условия использования</Link>
            <Link to="/contacts">Контакты</Link>
          </div>
        </footer>
      </div>
    </Provider>
  );
}

export default App;