import { useGetCategories } from "../../../hooks/useGetCategories";

export const CategorySelect = ({ product, setProduct }) => {
  const { categories } = useGetCategories();
  return (
    <select
      value={product?.category}
      onChange={(e) => setProduct({ ...product, category: e.target.value })}
    >
      <option disabled={true}>Selecione</option>
      {categories.map((item) => (
        <option key={item._id}>{item.name}</option>
      ))}
    </select>
  );
};
