import './App.css';

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Navbar from './components/Navigation/Navigation'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
