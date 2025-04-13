import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ResultChart/ResultChart";

const pricingPromise = fetch("pricingOption.json").then(res=>res.json())

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl block mx-auto"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
