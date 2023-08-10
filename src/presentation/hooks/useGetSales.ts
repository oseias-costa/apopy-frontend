import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSaleUseCase } from "../../application/sale.usecase";
import { fetchSales } from "../redux/slice/saleSlice";
import { RootState } from "../redux/store";

export function useGetSales(){
    const dispatch = useDispatch()
    const sales = useSelector((state: RootState) => state?.sale.sales)

    useEffect(() => {
        getSaleUseCase().then(res => 
            dispatch(fetchSales(res.data.data.sales)))
    },[])
    
    return { sales }
}