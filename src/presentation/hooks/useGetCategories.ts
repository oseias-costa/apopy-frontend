import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../redux/store";
import { getCategoriesUseCase } from "../../application/category/get-categories.usecase";
import { fetchCategories } from "../redux/slice/categorySlice";

export function useGetCategories() {
  const dispatch = useDispatch();
  const state = getCategoriesUseCase();
  const categories = useSelector(
    (state: RootState) => state.category?.categories
  );

  useEffect(() => {
    if (categories.length === 0) {
      state.then((res) => dispatch(fetchCategories(res.data.data.categories)));
    }
  }, []);

  return { categories };
}
