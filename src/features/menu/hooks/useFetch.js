import { useState, useEffect } from "react"; 
  
export function useFetch(url) { 
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 
  
  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setError(null);
    setData(null);

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("HTTP " + res.status);

        const json = await res.json();
        if (!active) return;

        // keep the loading UI visible longer for fast local responses
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (!active) return;
        setData(json);
      } catch (err) {
        if (!active) return;
        setError(err.message);
      } finally {
        if (!active) return;
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      active = false;
    };
  }, [url]);
  
  return { data, isLoading, error }; 
} 