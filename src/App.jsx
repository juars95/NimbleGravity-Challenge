import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CandidateProvider } from "./context/CandidateContext";
import { ToastProvider } from "./context/ToastContext";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <CandidateProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </CandidateProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
