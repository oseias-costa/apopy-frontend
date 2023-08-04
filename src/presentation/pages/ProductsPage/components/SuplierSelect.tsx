import { useGetSuplier } from "../../../hooks/useGetSupliers";

export const SuplierSelect = ({ product, setProduct }) => {
  const { supliers } = useGetSuplier();

  return (
    <select
      value={product.suplier}
      onChange={(e) => setProduct({ ...product, suplier: e.target.value })}
    >
      <option disabled={true}>Selecione</option>
      {supliers?.map((item) => (
        <option key={item._id}>{item.name}</option>
      ))}
    </select>
  );
};
