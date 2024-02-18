import { useState } from 'react';

import Page1 from './components/Page1';
import './App.css';

function App() {
  const [route, setRoute] = useState("page1");

  return (
    <div className="App">
      <Page1 />
      {/* <Page2 />
      <Page3 /> */}
    </div>
  );
}

export default App;
