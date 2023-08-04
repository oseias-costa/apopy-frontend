import { useGetCategories } from "../../../hooks/useGetCategories";

export const SubcategorySelect = ({ product, setProduct }) => {
  const { categories } = useGetCategories();

  const subcategory = categories.filter(
    (item) => item?.name === product.category
  )[0]?.subcategory;

  const subcategorySelect = (
    <select
      value={product?.subcategory}
      onChange={(e) => setProduct({ ...product, subcategory: e.target.value })}
    >
      <option disabled={true}>Selecione</option>
      {subcategory?.map((sub: string) => (
        <option key={sub}>{sub}</option>
      ))}
    </select>
  );

  return subcategorySelect;
};
