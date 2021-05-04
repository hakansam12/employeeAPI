import React, { Fragment } from "react";
import './App.css';

//Components

import ListEmployees from "./Components/listEmployees";

function App() {
  return (
   <Fragment>
     <div className="container">
          <ListEmployees />
     </div>
        
   </Fragment>
  );
}

export default App;
