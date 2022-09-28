import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterDom from "./services/router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouterDom></RouterDom>
      </BrowserRouter>
    </div>
  );
}

export default App();
