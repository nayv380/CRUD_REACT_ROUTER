import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarItem } from '../../store/itensSlice';
import styles from './Cadastro.module.css';

const Cadastro = () => {
  const [form, setForm] = useState({ 
    nome: '', 
    valor: '', 
    quantidade: '', 
    categoria: 'Hardware', 
    especificacoes: '' 
  });
  
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adicionarItem(form));
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    
    setForm({ nome: '', valor: '', quantidade: '', categoria: 'Hardware', especificacoes: '' });
    e.target.reset();
  };

  return (
    <div className={styles.container}>
      {showToast && <div className={styles.toast}>✅ Produto cadastrado com sucesso!</div>}
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Cadastro de Produtos</h2>
        <hr className={styles.formDivider} />

        <div className={styles.inputGroup}>
          <label>Nome do Produto *</label>
          <input 
            type="text" 
            placeholder="Ex: Monitor Gamer 24p" 
            required 
            value={form.nome}
            onChange={e => setForm({...form, nome: e.target.value})} 
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Quantidade em Estoque *</label>
          <input 
            type="number" 
            min="1"
            placeholder="Ex: 50" 
            required 
            value={form.quantidade}
            onChange={e => setForm({...form, quantidade: e.target.value})} 
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Valor Unitário (R$) *</label>
          <input 
            type="number" 
            step="0.01" 
            placeholder="0.00" 
            required 
            value={form.valor}
            onChange={e => setForm({...form, valor: e.target.value})} 
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Categoria do Item *</label>
          <select 
            required 
            value={form.categoria}
            onChange={e => setForm({...form, categoria: e.target.value})}
          >
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Periféricos">Periféricos</option>
            <option value="Redes">Redes</option>
            <option value="Suprimentos">Suprimentos</option>
            <option value="Serviços">Serviços</option>
            <option value="Escritório">Escritório</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Especificações Técnicas (Opcional)</label>
          <textarea 
            placeholder="Detalhes técnicos..." 
            value={form.especificacoes}
            onChange={e => setForm({...form, especificacoes: e.target.value})} 
          />
        </div>

        <button type="submit" className={styles.btnSubmit}>CADASTRAR NO SISTEMA</button>
        <p className={styles.obs}>* Todos os campos marcados são obrigatórios</p>
      </form>
    </div>
  );
};

export default Cadastro;