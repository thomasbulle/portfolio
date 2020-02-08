import React from 'react';
import 'App.scss';

// Components
import Header from 'components/Header/Header';
import About from 'components/About/About';


const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
