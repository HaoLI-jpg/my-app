import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import Home from "./routes/home"
import News from "./routes/news";
import Quiz from "./routes/quiz";
import Contact from "./routes/contact";

export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="News" element={<News />} />
        <Route path="Quiz" element={<Quiz />} />
        <Route path="Contact%20Us" element={<Contact />} />
      </Routes>
    </div>
  );
} 