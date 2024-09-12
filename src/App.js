import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preview from './pages/preview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/preview" exact Component={Preview} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
