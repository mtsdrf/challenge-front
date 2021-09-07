import ReactDOM from 'react-dom';

import './styles/index.css';
import './assets/fonts/lato.css';
import './assets/fonts/montserrat.css';
import './assets/fonts/proxima_nova.css';

import createRoutes from './routes';

const routes = createRoutes();

ReactDOM.render(
	routes,
	document.getElementById('root')
);
