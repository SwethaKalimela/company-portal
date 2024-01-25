import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <div className="App text-white flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
