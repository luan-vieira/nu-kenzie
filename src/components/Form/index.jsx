import { useState } from "react";
import "./styles.css";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  function hadleTransaction() {
    if (value > 0) {
      const transaction = {
        description,
        type,
        value: type === "Despesa" ? +-value : +value,
      };
      setListTransactions([transaction, ...listTransactions]);
    }
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="formDescricao"
    >
      <span className="spanDescricao"> Descrição</span>

      <input
        onChange={(event) => setDescription(event.target.value)}
        className="inputDescricao"
        placeholder="Digite aqui sua descrição"
        type="text"
      ></input>

      <span className="spanExemplo">Ex: Compra de roupas</span>
      <div className="containerValor">
        <div>
          <span className="spanValor">Valor</span>
          <input
            onChange={(event) => setValue(event.target.value)}
            className="inputValor"
            placeholder="1          R$"
            type="number"
          ></input>
        </div>
        <div>
          <span className="spanValor">Tipo de valor</span>
          <select
            onChange={(event) => setType(event.target.value)}
            className="selectType"
          >
            <option>Entrada</option>
            <option>Despesa</option>
          </select>
        </div>
      </div>
      <button
        className="buttonInserir"
        type="submit"
        onClick={() => hadleTransaction()}
      >
        Inserir valor
      </button>
    </form>
  );
}
export default Form;
