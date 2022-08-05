import Card from "../Card";
import "./styles.css";

function List({ listTransactions, handleRemove }) {
  return (
    <div className="cardMobile">
      <div className="divResumoMenu">
        <span className="resumoFinanceiro">Resumo financeiro</span>
        <ul className="navBar">
          <li>Todos</li>
          <li>Entradas</li>
          <li>Despesas</li>
        </ul>
      </div>

      <div className="containerCards">
        {listTransactions.length <= 0 ? (
          <span className="semLançamentos">
            Você ainda não possui nenhum lançamento
          </span>
        ) : (
          listTransactions.map((transaction, index) => (
            <Card
              handleRemove={handleRemove}
              listTransactions={listTransactions}
              transaction={transaction}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default List;
