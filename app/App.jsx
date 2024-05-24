'use client';


const PORT = 3001;

app.listen(PORT);


import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { useEffect } from 'react';

import { useStore } from './store/app-store';

export const App = (props) => {

  const store = useStore();

  useEffect(() => {
    store.checkAuth();
  }, []);

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  ) 
};