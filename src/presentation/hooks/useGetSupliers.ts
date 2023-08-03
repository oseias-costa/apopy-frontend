import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getSupliersUseCase from "../../application/suplier/get-supliers.usecase";
import { fetchData } from "../redux/slice/suplierSlice";
import { RootState } from "../redux/store";

export function useGetSuplier() {
  const supliers = useSelector((state: RootState) => state.suplier.supliers);
  const dispatch = useDispatch();

  useEffect(() => {
    getSupliersUseCase().then((res) =>
      dispatch(fetchData(res.data.data.supliers))
    );
  }, []);

  return { supliers };
}
