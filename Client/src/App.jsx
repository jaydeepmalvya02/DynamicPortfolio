import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import CreatePortfolio from "./pages/CreatePortfolioPage";
import TemplateOne from "./components/templates/TemplateOne";
import PortfolioPage from "./pages/PortfolioPage";
import TemplateSelection from "./components/TemplateSelection";
import PortfolioInput from "./components/Form/PortfolioInput";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<PortfolioPage />} />
        <Route path="/select-template" element={<TemplateSelection />} />
        <Route path="/create-portfolio" index element={<CreatePortfolio />} />
        <Route path="/create-portfolio/form" element={<PortfolioInput />} />
      </Routes>
    </>
  );
};

export default App;
