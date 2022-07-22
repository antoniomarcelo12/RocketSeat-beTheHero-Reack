
import './global.css'
import Routes from './routes'

import { BrowserRouter as Router } from 'react-router-dom';


export default function() {
     return (
         <Router>
            <Routes />
        </Router>
    );

} 