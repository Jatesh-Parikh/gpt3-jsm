import "./App.css";
import Brand from "./components/Brand/Brand";
import Navbar from "./components/Navbar/Navbar";
import Header from "./containers/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      {/* <WhatGPT3 /> */}
      {/* <Features /> */}
      {/* <Possibility /> */}
      {/* <CTA /> */}
      {/* <Blog /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
