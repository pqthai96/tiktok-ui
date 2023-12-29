import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {publicRoutes} from "./routes";
import {DefaultLayout} from "./layouts"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            if(route.layout) {
              return (
                <Route key={index} path={route.path} element={route.layout}/>
              )
            }
            return (
              <Route key={index} path={route.path} element={<DefaultLayout>{route.element}</DefaultLayout>}/>
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
