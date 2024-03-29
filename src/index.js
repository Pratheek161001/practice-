import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { AuthContextprovider } from './components/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextprovider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextprovider>
  
);
