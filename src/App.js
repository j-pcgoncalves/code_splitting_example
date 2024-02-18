import React, { useState } from 'react';

import Page1 from './components/Page1';
import './App.css';

function App() {
  const [route, setRoute] = useState("page1");
  const [Component, setComponent] = useState("");

  const onRouteChange = (route) => {
    if (route === "page1") {
      setRoute(route);
    } else if (route === "page2") {
      import("./components/Page2").then((Page2) => {
        setRoute(route);
        setComponent(Page2.default);
      });
    } else if (route === "page3") {
      import("./components/Page3").then((Page3) => {
        setRoute(route);
        setComponent(Page3.default);
      });
    }
  };

  if (route === "page1") {
    return <Page1 onRouteChange={onRouteChange} />;
  } else {
    return Component;
  }
}

export default App;
