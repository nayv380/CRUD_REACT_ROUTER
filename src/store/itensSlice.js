import { createSlice } from "@reduxjs/toolkit";

const carregarBanco = () => {
  const dados = localStorage.getItem("banco_ifmg_final");
  return dados ? JSON.parse(dados) : [];
};

const itensSlice = createSlice({
  name: "itens",
  initialState: carregarBanco(),
  reducers: {
    adicionarItem: (state, action) => {
      const codigo = `PRD-${Math.floor(1000 + Math.random() * 9000)}`;
      const novoItem = { ...action.payload, id: Date.now(), codigo };
      state.push(novoItem);
      localStorage.setItem("banco_ifmg_final", JSON.stringify(state));
    },

    adicionarItem: (state, action) => {
      const codigo = `PRD-${Math.floor(1000 + Math.random() * 9000)}`;
      // Agora incluímos a quantidade vinda do formulário
      const novoItem = { ...action.payload, id: Date.now(), codigo };
      state.push(novoItem);
      localStorage.setItem("banco_ifmg_final", JSON.stringify(state));
    },

    removerItem: (state, action) => {
      const novaLista = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("banco_ifmg_final", JSON.stringify(novaLista));
      return novaLista;
    },
    editarPreco: (state, action) => {
      const { id, novoPreco } = action.payload;
      const index = state.findIndex((i) => i.id === id);
      if (index !== -1) {
        state[index].valor = novoPreco;
        localStorage.setItem("banco_ifmg_final", JSON.stringify(state));
      }
    },
  },
});

export const { adicionarItem, removerItem, editarPreco } = itensSlice.actions;
export default itensSlice.reducer;
