import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { VehicleContextProvider } from "./context/VehicleContextProvider.js";
import AuthProvider from "./context/AuthContextProvider.js";
import Main from "./Main.js";

function App() {
  return (
    <AuthProvider>
      <VehicleContextProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </VehicleContextProvider>
    </AuthProvider>

  );
}

export default App;
