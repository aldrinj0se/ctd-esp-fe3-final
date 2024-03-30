import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useContextGlobal } from "./Components/utils/Global.context";

function App() {
  const { toggleTheme } = useContextGlobal();

  return (
    <div className={`${toggleTheme} indexApp`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>¡Ruta no encontrada!</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
