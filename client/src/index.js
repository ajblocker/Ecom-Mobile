import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'milligram'
import './style.min.css'
import * as serviceWorker from './serviceworker'

import App from './App'

ReactDOM.render(
	<Router><App /></Router>,
	document.getElementById('root')
)

serviceWorker.register();