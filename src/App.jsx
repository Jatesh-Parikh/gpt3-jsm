import "./App.css";
import Brand from "./components/Brand/Brand";
import Navbar from "./components/Navbar/Navbar";
import Features from "./containers/Features/Features";
import Header from "./containers/Header/Header";
import WhatGPT3 from "./containers/WhatGPT3/WhatGPT3";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      {/* <Possibility /> */}
      {/* <CTA /> */}
      {/* <Blog /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
