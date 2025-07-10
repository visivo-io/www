import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Privacy from "./Privacy.jsx";
import AboutUs from "./AboutUs.jsx";
import Pricing from "./Pricing.jsx";
import Examples from "./Examples.jsx";
import BlogSection from "./BlogSection.jsx";
import BusinessIntelligence from "./solutions/BusinessIntelligence.jsx";
import SoftwareEngineering from "./solutions/SoftwareEngineering.jsx";
import Embedding from "./solutions/Embedding.jsx";
import DDDV from "./solutions/DDDV.jsx";
import BlogPost from "./components/BlogPost.jsx";
import NotFound from "./NotFound.jsx";
import "./index.css";
import ComparisonPage from "./Comparison.jsx";
import vendorData from "./vendor-data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComparisonsList from "./ComparisonsList.jsx";
import GetStarted from "./components/GetStarted.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="examples" element={<Examples />} />
          <Route path="get-started" element={<GetStarted />} />
          <Route path="blog" element={<BlogSection />} />
          <Route path="blog/:slug" element={<BlogPost />} /> {/* Dynamic blog post route */}
          <Route path="solutions/software-engineering" element={<SoftwareEngineering />} />
          <Route path="solutions/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="solutions/embedding" element={<Embedding />} />
          <Route path="solutions/dddv" element={<DDDV />} />
          <Route path="comparison-list" element={<ComparisonsList />} />
          {Object.keys(vendorData)
            .filter(vendor => vendor !== 'Visivo')
            .flatMap((vendor1, _, vendors) => 
              vendors
                .filter(vendor2 => vendor2 !== vendor1)
                .map(vendor2 => (
                  <Route 
                    key={`${vendor1}-${vendor2}`}
                    path={`comparisons/${vendorData[vendor1].urlSlug}-${vendorData[vendor2].urlSlug}`} 
                    element={<ComparisonPage competitorKeys={[vendor1, vendor2]}/>} 
                  />
                ))
            )}
          <Route path="*" element={<NotFound />} /> {/* 404 catch-all route */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
