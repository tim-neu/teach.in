import React from 'react';
import { render } from 'react-dom';

import routes from './router';

// Render
render(
  routes, document.getElementById('app')
);