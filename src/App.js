import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { VehicleContextProvider } from "./context/VehicleContextProvider.js";
import AuthProvider from "./context/AuthContextProvider.js";
import Main from "./Main.js";
import { DateProvider } from "./context/DateContext.js";

function App() {
  return (
    <AuthProvider>
      <VehicleContextProvider>
        <DateProvider>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </DateProvider>
      </VehicleContextProvider>
    </AuthProvider>
  );
}

export default App;
