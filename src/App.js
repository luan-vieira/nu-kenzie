import "./App.css";
import Main from "./components/Main";
import { useState } from "react";
import Header from "./components/Header";

import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  function handleRemove(itemRemove) {
    const arrayFiltrado = listTransactions.filter((item) => {
      return itemRemove !== item;
    });
    setListTransactions(arrayFiltrado);
  }

  return (
    <>
      <Header></Header>
      <Main>
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          {listTransactions.length > 0 ? (
            <TotalMoney listTransactions={listTransactions}></TotalMoney>
          ) : (
            <></>
          )}
        </div>
        <List
          handleRemove={handleRemove}
          listTransactions={listTransactions}
        ></List>
      </Main>
    </>
  );
}

export default App;
