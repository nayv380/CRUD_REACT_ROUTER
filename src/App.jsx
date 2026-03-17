import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import './index.css';

function App() {
  const [itens, setItens] = useState([
    { 
      id: 1, 
      nome: 'Teclado Mecânico', 
      categoria: 'Periféricos', 
      valor: 250.00, 
      especificacoes: 'RGB, Switch Blue' 
    }
  ]);

  const adicionarItem = (novoItem) => {
    setItens([...itens, { ...novoItem, id: Date.now() }]);
  };

  const deletarItem = (id) => {
    setItens(itens.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home lista={itens} aoDeletar={deletarItem} />} />
        <Route path="/cadastro" element={<Cadastro aoSalvar={adicionarItem} />} />
      </Routes>
    </>
  );
}

export default App;