// Tailwind css init
import './styles/app.scss';
import App from './App';

// Hot module replacement
if (module.hot) {
  module.hot.accept();
}

// Init app
App();
