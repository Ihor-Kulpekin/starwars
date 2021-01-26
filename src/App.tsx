import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { GlobalStyle } from './utils/globalStyles';
import { configureStore } from './store/store';
import AppRouter from './router/AppRouter';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const { store, persistor } = configureStore();

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
      <Footer/>
    </Router>
  );
}

export default App;
