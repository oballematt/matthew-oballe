import './App.css';

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Navbar from './components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
