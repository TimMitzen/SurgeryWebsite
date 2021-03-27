import './App.css';
import { Router } from 'react-router-dom';
import Routes from './routes/Routes'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes/>
        </Router>
      Surgery Website
       
      </header>
    </div>
  );
}

export default App;
