import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div data-aos="fade-up">Animate me!</div>
      <h1 className="bg-slate-500 "> Hello</h1>
    </>
  );
}

export default App;
