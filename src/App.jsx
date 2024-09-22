import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Projects from "./pages/projects";
import { TimelineDemo } from "./pages/journey";

function App() {
  return (
    <div className=" scroll-container bg-web">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/projects" element={<Layout />}>
          <Route index element={<Projects />} />
        </Route>
        <Route path="/journey" element={<Layout />}>
          <Route index element={<TimelineDemo />} />
        </Route>

        <Route path="/test" element={<Layout />}>
          <Route index element={<TimelineDemo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
