import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./pages/Login";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <CustomNavbar />
    </>
  );
}

export default App;
