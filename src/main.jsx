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
import BlogPost from "./components/BlogPost.jsx";
import NotFound from "./NotFound.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="blog" element={<BlogSection />} />
          <Route path="blog/:slug" element={<BlogPost />} /> {/* Dynamic blog post route */}
          <Route path="solutions/software-engineering" element={<SoftwareEngineering />} />
          <Route path="solutions/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="*" element={<NotFound />} /> {/* 404 catch-all route */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
