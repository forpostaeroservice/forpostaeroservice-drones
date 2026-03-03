import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canscroll = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", 
      });
    }, 0);

    return () => clearTimeout(canscroll);
  }, [pathname]);

  return null;
}