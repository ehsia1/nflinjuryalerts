import React from 'react';
import { render } from 'react-dom';
import App from './App';

const anchor = document.createElement('div');
anchor.id = 'rcr-anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);

render(<App />, document.getElementById('rcr-anchor'));
