import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSalvar = (e) => {
    e.preventDefault();
    alert("Cadastrado com sucesso!");
    navigate('/'); // Redireciona via código
  };

  return (
    <div className="container">
      <h1>Novo Cadastro</h1>
      <form onSubmit={handleSalvar}>
        <input type="text" placeholder="Nome do produto" required />
        <input type="number" placeholder="Quantidade" required />
        <button type="submit">Finalizar Cadastro</button>
      </form>
    </div>
  );
};
export default Cadastro;