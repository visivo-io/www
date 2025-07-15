import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import vendorData from "./vendor-data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load all non-critical routes
const Home = lazy(() => import("./Home.jsx"));
const Privacy = lazy(() => import("./Privacy.jsx"));
const AboutUs = lazy(() => import("./AboutUs.jsx"));
const Pricing = lazy(() => import("./Pricing.jsx"));
const Examples = lazy(() => import("./Examples.jsx"));
const BlogSection = lazy(() => import("./BlogSection.jsx"));
const BusinessIntelligence = lazy(() => import("./solutions/BusinessIntelligence.jsx"));
const SoftwareEngineering = lazy(() => import("./solutions/SoftwareEngineering.jsx"));
const Embedding = lazy(() => import("./solutions/Embedding.jsx"));
const DDDV = lazy(() => import("./solutions/DDDV.jsx"));
const BlogPost = lazy(() => import("./components/BlogPost.jsx"));
const NotFound = lazy(() => import("./NotFound.jsx"));
const ComparisonPage = lazy(() => import("./Comparison.jsx"));
const ComparisonsList = lazy(() => import("./ComparisonsList.jsx"));
const GetStarted = lazy(() => import("./components/GetStarted.jsx"));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
