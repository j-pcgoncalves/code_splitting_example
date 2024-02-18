import React, { useState } from 'react';

import Page1 from './components/Page1';
import asyncComponent from './components/AsyncComponent';
import './App.css';

function App() {
  const [route, setRoute] = useState("page1");

  const onRouteChange = (route) => {
    setRoute(route);
  };

  if (route === "page1") {
    return <Page1 onRouteChange={onRouteChange} />;
  } else if (route === "page2") {
    const AsyncPage2 = asyncComponent(() => import("./components/Page2"));
    return <AsyncPage2 onRouteChange={onRouteChange} />;
  } else if (route === "page3") {
    const AsyncPage3 = asyncComponent(() => import("./components/Page3"));
    return <AsyncPage3 onRouteChange={onRouteChange} />;
  }
}

export default App;
