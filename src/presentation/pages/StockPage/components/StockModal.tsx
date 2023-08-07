import { StockStateProps } from "../../../types/pages/stock.types";
import { CreateStockItem } from "./CreateStockItem";
import { DeleteStockItem } from "./DeleteStockItem";
import { MovimentStockItem } from "./MovimentStockItem";
import { UpdateStockItem } from "./UpdateStockItem";

type typeModal = {
    [key: string]: React.ReactNode;
  };

export const StockModal: React.FC<StockStateProps> = ({stockState, setStockState}) => {

    const typeModal: typeModal = {
        create: <CreateStockItem stockState={stockState} setStockState={setStockState} />,
        update: <UpdateStockItem stockState={stockState} setStockState={setStockState} />,
        delete: <DeleteStockItem stockState={stockState} setStockState={setStockState} />,
        moviment: <MovimentStockItem stockState={stockState} setStockState={setStockState} />,

    }
    
    return <>{typeModal[stockState?.type]}</>
}
