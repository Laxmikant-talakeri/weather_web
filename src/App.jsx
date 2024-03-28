import React from 'react';

import WeatherApp from './components/weatherapp/weatherapp'; // Corrected import

const App = () => {
  return (
    <div className="app">
      <WeatherApp /> {/* Render WeatherApp component */}
    </div>
  );
};

export default App;
