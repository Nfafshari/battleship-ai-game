import { createRoot } from 'react-dom/client';
import App from './app/app';

import 'bootstrap/dist/css/bootstrap.min.css';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
const root = createRoot(mainElement);
root.render(<App />);