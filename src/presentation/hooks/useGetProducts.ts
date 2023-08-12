import { useDispatch, useSelector } from "react-redux";
import { getProductsUseCase } from "../../application/product.usecase";
import { fetchProducts } from "../redux/slice/productSlice";
import { useEffect } from "react";
import { RootState } from "../redux/store";

export function useGetProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state?.product.products);

  useEffect(() => {
    if (products.length === 0) {
      getProductsUseCase().then((res) =>
        dispatch(fetchProducts(res.data.data.products))
      );
    }
  }, []);

  return { products };
}
