import { useState } from "react";
import { useDispatch } from "react-redux";
import { transferSaleUseCase } from "../../../../application/sale.usecase";
import { Sale } from "../../../../domain/entities/sale";
import { StockStateProps } from "../../../types/pages/stock.types";
import { originStockMoviment, variablesSales } from "./utils-sales";
import { transferSale } from "../../../redux/slice/saleSlice";
import { initialSaleState } from "../../../types/pages/sale.types";
import { transferStockToSale } from "../../../redux/slice/stockSlice";

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
  const dispatch = useDispatch();

  async function handleTransferSale() {
    const variables: Omit<Sale, "_id"> = variablesSales(stockState, newSale);
    const transferSaleReq = await transferSaleUseCase(variables);

    if (transferSaleReq.status === 200) {
      dispatch(transferSale(transferSaleReq.data.data.transferSale));
      dispatch(transferStockToSale(originStockMoviment(stockState, newSale)));
      setStockState(initialSaleState);
    }
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
