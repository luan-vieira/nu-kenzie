import "./styles.css";

function Card({ transaction, index, handleRemove }) {
  if (transaction.type === "Entrada") {
    return (
      <div className="cardPai" key={index}>
        <div className="textCard">
          <h3>{transaction.description}</h3>
          <span>{transaction.type}</span>
        </div>

        <div className="divValorBtn">
          {transaction.type === "Despesa" ? (
            <span>-{-transaction.value}</span>
          ) : (
            <span>{transaction.value}</span>
          )}

          <button
            className="botaoRemove"
            onClick={() => handleRemove(transaction)}
          >
            remove
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="cardPaiSaida" key={index}>
      <div className="textCard">
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>

      <div className="divValorBtn">
        {transaction.type === "Despesa" ? (
          <span>-{-transaction.value}</span>
        ) : (
          <span>{transaction.value}</span>
        )}

        <button
          className="botaoRemove"
          onClick={() => handleRemove(transaction)}
        >
          remove
        </button>
      </div>
    </div>
  );
}
export default Card;
