const Home = ({ lista, aoDeletar }) => {
  return (
    <div className="container" style={{ maxWidth: '900px' }}>
      <h1>Inventário Completo</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Especificações</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(item => (
            <tr key={item.id} style={{ borderBottom: '1px solid #f1f1f1' }}>
              <td style={{ padding: '15px 0' }}><strong>{item.nome}</strong></td>
              <td><span className="badge">{item.categoria}</span></td>
              <td>R$ {Number(item.valor).toFixed(2)}</td>
              <td style={{ fontSize: '0.9rem', color: '#666' }}>{item.especificacoes}</td>
              <td>
                <button onClick={() => aoDeletar(item.id)} className="btn-delete">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;