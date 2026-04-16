import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Bots from "./pages/Bots";
import Education from "./pages/Education";
import EconomicCalendar from "./pages/EconomicCalendar";
import ForexBasics from "./pages/ForexBasics";
import FundamentalAnalysis from "./pages/FundamentalAnalysis";
import TechnicalAnalysis from "./pages/TechnicalAnalysis";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Promotions from "./pages/Promotions";
import Crypto from "./pages/markets/Crypto";
import Forex from "./pages/markets/Forex";
import Indices from "./pages/markets/Indices";
import Stocks from "./pages/markets/Stocks";
import Commodities from "./pages/markets/Commodities";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="markets/crypto" element={<Crypto />} />
          <Route path="markets/forex" element={<Forex />} />
          <Route path="markets/indices" element={<Indices />} />
          <Route path="markets/stocks" element={<Stocks />} />
          <Route path="markets/commodities" element={<Commodities />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="bots" element={<Bots />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="education/forex-basics" element={<ForexBasics />} />
          <Route path="education/ai-trading" element={<Education />} />
          <Route path="education/economic-calendar" element={<EconomicCalendar />} />
          <Route path="education/fundamental-analysis" element={<FundamentalAnalysis />} />
          <Route path="education/technical-analysis" element={<TechnicalAnalysis />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
