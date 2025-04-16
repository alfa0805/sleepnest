
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import { Commet } from "react-loading-indicators";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false, 
      easing: "ease-in",
    });
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Commet color="#dee621" size="large" text="loading" textColor="#333" />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="pt-23">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
