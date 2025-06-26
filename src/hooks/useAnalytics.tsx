
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useAnalytics = () => {
  useEffect(() => {
    const logPageView = async () => {
      try {
        await supabase.from('page_views').insert([{
          page_path: window.location.pathname,
          user_agent: navigator.userAgent,
          referrer: document.referrer || null,
        }]);
      } catch (error) {
        console.error('Analytics error:', error);
      }
    };

    // Log initial page view
    logPageView();

    // Log page views on route changes (for SPA)
    const handleRouteChange = () => {
      setTimeout(logPageView, 100); // Small delay to ensure route has changed
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const trackEvent = async (eventName: string, properties?: Record<string, any>) => {
    try {
      await supabase.from('page_views').insert([{
        page_path: `${window.location.pathname}#${eventName}`,
        user_agent: navigator.userAgent,
        referrer: JSON.stringify(properties || {}),
      }]);
    } catch (error) {
      console.error('Event tracking error:', error);
    }
  };

  return { trackEvent };
};
