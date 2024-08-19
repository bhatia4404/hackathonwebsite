import { RecoilRoot } from "recoil";
import "./App.css";
import { Home } from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
