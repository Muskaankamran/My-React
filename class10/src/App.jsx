import React, { useState } from 'react';
import Navbar from './components/Navbar';


const App = () => {
  <Navbar/>
  const [theme, setTheme] = useState("dark");

  return (
    <div data-theme={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;