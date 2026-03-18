import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removerItem, editarPreco } from '../../store/itensSlice';
import styles from './Home.module.css';

const Home = () => {
  const itens = useSelector((state) => state.itens);
  const dispatch = useDispatch();
  
  const [toast, setToast] = useState({ show: false, msg: "" });
  const [editId, setEditId] = useState(null);
  const [novoValor, setNovoValor] = useState("");
  const [confirmId, setConfirmId] = useState(null);

  const mostrarAviso = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 3000);
  };

  return (
    <div className={styles.container}>
      {toast.show && <div className={styles.toast}>{toast.msg}</div>}

      <header className={styles.header}>
        <h1 className={styles.mainTitle}>SISTEMA DE GESTÃO DE ESTOQUE</h1>
        <hr className={styles.divider} />
        <h2 className={styles.subTitle}>TOTAL DE PRODUTOS NO ESTOQUE: {itens.length}</h2>
      </header>
      
      <div className={styles.grid}>
        {itens.map(item => (
          <div key={item.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.codigo}>CÓDIGO: {item.codigo}</span>
              <span className={styles.categoria}>{item.categoria.toUpperCase()}</span>
            </div>
            
            <hr />

            <div className={styles.content}>
              <h3 className={styles.nome}>{item.nome}</h3>
              <span className={styles.quantidadeBadge}>ESTOQUE: {item.quantidade} UNID.</span>
              <p className={styles.desc}>{item.especificacoes || "Sem especificações."}</p>
              
              <div className={styles.priceContainer}>
                {editId === item.id ? (
                  <div className={styles.editRow}>
                    <input 
                      type="number" 
                      value={novoValor} 
                      onChange={(e) => setNovoValor(e.target.value)}
                      autoFocus
                    />
                    <button className={styles.btnOk} onClick={() => { 
                      dispatch(editarPreco({ id: item.id, novoPreco: novoValor }));
                      setEditId(null);
                      mostrarAviso("✅ Preço atualizado");
                    }}>OK</button>
                    <button className={styles.btnX} onClick={() => setEditId(null)}>X</button>
                  </div>
                ) : (
                  <span className={styles.valor}>VALOR: R$ {Number(item.valor).toFixed(2)}</span>
                )}
              </div>
            </div>

            <hr />

            <div className={styles.actions}>
              {confirmId === item.id ? (
                <div className={styles.confirmBox}>
                  <span>EXCLUIR?</span>
                  <div className={styles.confirmBtns}>
                    <button className={styles.btnSim} onClick={() => {
                      dispatch(removerItem(item.id));
                      mostrarAviso("🗑️ Produto removido");
                    }}>SIM</button>
                    <button className={styles.btnNao} onClick={() => setConfirmId(null)}>NÃO</button>
                  </div>
                </div>
              ) : (
                <>
                  <button className={styles.btnSecondary} onClick={() => {
                    setEditId(item.id);
                    setNovoValor(item.valor);
                    setConfirmId(null);
                  }}>EDITAR PREÇO</button>
                  
                  <button className={styles.btnDanger} onClick={() => {
                    setConfirmId(item.id);
                    setEditId(null);
                  }}>EXCLUIR</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;