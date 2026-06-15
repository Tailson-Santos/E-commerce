import { Routes, Route } from "react-router-dom";

import { AppProvider } from "./providers/AppProvider";
import { ScrollToTop } from "../shared/components/ScrolltoTop";
import { Footer } from "../shared/components/Footer";

import { Home } from "../features/produtos/pages/Home";
import { DetalheProduto } from "../features/produtos/pages/DetalheProduto";
import { Carrinho } from "../features/carrinho/pages/Carrinho";
import { Login } from "../features/autenticacao/pages/Login";
import { Cadastro } from "../features/autenticacao/pages/Cadastro";

function App() {
  return (
    <AppProvider>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produto/:id" element={<DetalheProduto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </AppProvider>
  );
}

export default App;
