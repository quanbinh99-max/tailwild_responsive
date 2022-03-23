import Home from "./components/Home/Home";
import Pets from "./components/Pets/Pets"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col mx-auto p-0 relative w-[1280px] bg-[#FFFFFF] sm:w-[360px]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Pets />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
