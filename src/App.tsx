import './App.css';
import { Main } from './main/Main';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
