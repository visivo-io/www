// Initialize Segment
const WRITE_KEY= 'mYSybZgBuGL5va2j4W7AkxERlf8kODbK';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnalyticsBrowser } from '@segment/analytics-next';

export const useAnalytics = () => {
  const location = useLocation();
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
      setAnalytics(AnalyticsBrowser.load({ writeKey: WRITE_KEY }));
  }, []);

  useEffect(() => {
    if (location && analytics) {
      // Track page view
      analytics.page({
        path: location.pathname,
        url: window.location.href,
        search: location.search,
        title: document.title,
      });
    }
  }, [location, analytics]);
};