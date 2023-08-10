import { useState } from "react";
import { transferSaleUseCase } from "../../../../application/sale.usecase";
import { StockStateProps } from "../../../types/pages/stock.types";
import { variablesSales } from "./utils-sales";

export interface NewSale {
  quantity: number;
  price: number;
  profit: number;
  percentage: number;
  createAt: string;
}

const initialStateNewSale: NewSale = {
  quantity: 0,
  price: 0,
  profit: 0,
  percentage: 0,
  createAt: "",
};

export const TransferToSale: React.FC<StockStateProps> = ({
  stockState,
  setStockState,
}) => {
  const [newSale, setNewSale] = useState<NewSale>(initialStateNewSale);

  async function handleTransferSale() {
    const teste = variablesSales(stockState, newSale);

    console.log(JSON.stringify(teste));

    // if(data.status === 200){
    //     console.log(data)
    // }
  }

  return (
    <div>
      <h2>Transfer Modal</h2>
      <br />
      <br />
      <p>Quantidade</p>
      <input
        type="number"
        placeholder="Quantidade"
        value={newSale.quantity}
        onChange={(e) =>
          setNewSale({ ...newSale, quantity: Number(e.target.value) })
        }
      />
      <br />
      <br />
      <p>Preço</p>
      <input
        type="number"
        placeholder="Preço"
        value={newSale.price}
        onChange={(e) =>
          setNewSale({ ...newSale, price: Number(e.target.value) })
        }
      />
      <br />
      <br />
      <p>Percentual de Lucro</p>
      <input
        type="number"
        placeholder="Percentual de Lucro"
        value={newSale.price}
      />
      <br />
      <br />
      <p>Total</p>
      <input
        type="number"
        placeholder="Total"
        disabled={true}
        value={newSale.price * newSale.quantity}
      />
      <input type="number" placeholder="Lucro" value={newSale.profit} />
      <br />
      <br />
      <p>Lucro</p>
      <input
        type="number"
        disabled={true}
        value={newSale.price - stockState.costPrice}
      />
      <br />
      <br />
      <p>Preço</p>
      <input
        type="text"
        disabled={true}
        value={(newSale.price - stockState.costPrice) / newSale.price}
      />
      <button onClick={handleTransferSale}>Nova Venda</button>
    </div>
  );
};
