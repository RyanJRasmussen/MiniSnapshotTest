import './App.css';
import GitHubCard from './Components/GitHubCard';
import renderer from 'react-test-renderer'

function App() {
  return (
    <div className="App">
      <GitHubCard></GitHubCard>
      <h2>This is a test</h2>
    </div>
  );
}

export default App;
