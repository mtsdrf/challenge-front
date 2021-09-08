import ReactDOM from 'react-dom';

import './styles/index.css';

import createRoutes from './routes';

const routes = createRoutes();

ReactDOM.render(
	routes,
	document.getElementById('root')
);
