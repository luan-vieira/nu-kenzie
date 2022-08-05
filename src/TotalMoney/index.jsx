import "./styles.css";

function TotalMoney({ listTransactions }) {
  const soma = listTransactions.reduce(
    (previus, current) => previus + current.value,
    0
  );

  return (
    <div className="containerPaiTotal">
      <div className="containerTextTotal">
        <h3>Valor Total:</h3>
        <span>O valor se refere ao saldo</span>
      </div>
      <span className="valorTotal">$ {soma}</span>
    </div>
  );
}
export default TotalMoney;
