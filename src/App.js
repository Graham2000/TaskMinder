import './assets/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContents from "./pages/List";
import Details from "./pages/Details";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContents />}></Route>
          <Route path="details" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
