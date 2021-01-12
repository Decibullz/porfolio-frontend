
import './App.css';
import DateTime from './components/DateTime/DateTime';
import Contact from './components/Contact/Contact';
import Pong from './components/PythonGames/Pong';
import KnowledgeCatcher from './components/PythonGames/KnowledgeCatcher';
import SpaceIntruders from './components/PythonGames/SpaceIntruders';


function App() {
  return (
    <div className="App">
      <DateTime/>
      <div className="python-arcade">
      <Pong/>
      <KnowledgeCatcher/>
      <SpaceIntruders/>
      </div>
      <Contact/>
    </div>
  );
}

export default App;
