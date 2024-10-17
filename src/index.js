import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';
import { BookProvider } from './context/booksctx';
import "./store"

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <BookProvider>
    <Provider>
      <App />
    </Provider>
  </BookProvider>
);
