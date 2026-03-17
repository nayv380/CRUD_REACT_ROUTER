import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro = ({ aoSalvar }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    categoria: 'Eletrônicos',
    valor: '',
    especificacoes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    aoSalvar(form);
    navigate('/'); 
  };

  return (
    <div className="container">
      <h1>Cadastrar Novo Item</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome do Produto" 
          required 
          onChange={(e) => setForm({...form, nome: e.target.value})}
        />
        
        <select 
          style={{ padding: '12px', borderRadius: '12px', border: '2px solid #f1f1f1', marginBottom: '10px' }}
          onChange={(e) => setForm({...form, categoria: e.target.value})}
        >
          <option value="Eletrônicos">Eletrônicos</option>
          <option value="Periféricos">Periféricos</option>
          <option value="Software">Software</option>
          <option value="Hardware">Hardware</option>
        </select>

        <input 
          type="number" 
          step="0.01" 
          placeholder="Valor (R$)" 
          required 
          onChange={(e) => setForm({...form, valor: e.target.value})}
        />

        <textarea 
          placeholder="Especificações Técnicas" 
          style={{ padding: '12px', borderRadius: '12px', border: '2px solid #f1f1f1', minHeight: '80px' }}
          onChange={(e) => setForm({...form, especificacoes: e.target.value})}
        />

        <button type="submit">Finalizar Cadastro</button>
      </form>
    </div>
  );
};

export default Cadastro;