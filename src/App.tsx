import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from './utils/globalStyles';
import { store } from './store/store';
import AppRouter from './router/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Provider store={store}>
        <AppRouter />
      </Provider>
      <Footer />
    </Router>
  );
}

export default App;
