import { Routes, Route } from "react-router-dom";

import GamePage from "./pages/GamePage.js";
import HistoryPage from "./pages/HistoryPage.js";
import Navigation from "./components/Navigation.js";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <Navigation />
    </>
  );
}
