import './App.css';
import { Main } from './main/Main';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';


function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Main />
    </Router>
  );
}

export default App;
