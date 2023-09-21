import React from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from './dashboard';


// index.js


const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<Dashboard />);
