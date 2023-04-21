import logo from './logo.svg';
import './App.css';
import { ModalProvider } from './modalContext';
import Component from "./component";
import Component2 from "./component2";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
       <h1>Hello App</h1>
       <ModalProvider>
        <Component />
        <Component2 />
      </ModalProvider>



    </div>
  );
}

export default App;
