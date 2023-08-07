import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../redux/store";
import { getStockUseCase } from "../../application/stock.usecase";
import { fetchStock } from "../redux/slice/stockSlice";

export function useGetStock() {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state?.stock.stock);

  useEffect(() => {
    getStockUseCase().then((res) =>
        dispatch(fetchStock(res.data.data.stock))
    );
  }, []);

  return { stock };
}
