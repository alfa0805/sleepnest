// import React, { useEffect, useState } from "react";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import "aos/dist/aos.css";
// import { Outlet } from "react-router-dom";

// function App() {

//   return (
//     <div>
//       <Header />
//       <div className="pt-23">
//         <Outlet />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import { Commet } from "react-loading-indicators"; // 👈 Loader import qilingan

function App() {
  const [loading, setLoading] = useState(true); // 👈 loading holati

  useEffect(() => {
    // Simulyatsiya: 2 soniyadan keyin loading tugaydi
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2000 = 2 sekund

    return () => clearTimeout(timer); // tozalash
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
