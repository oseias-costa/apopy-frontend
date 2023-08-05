import { Product } from "../../../../domain/entities/product";
import { Suplier } from "../../../../domain/entities/suplier";
import { useGetSuplier } from "../../../hooks/useGetSupliers";

interface SuplierSelectProps {
  product: Product,
  setProduct: (product: Product) => void
}

export const SuplierSelect: React.FC<SuplierSelectProps> = ({ product, setProduct }) => {
  const { supliers } = useGetSuplier();

  return (
    <select
      value={product.suplier}
      onChange={(e) => setProduct({ ...product, suplier: e.target.value })}
    >
      <option disabled={true}>Selecione</option>
      {supliers?.map((item: Suplier) => (
        <option key={item._id}>{item.name}</option>
      ))}
    </select>
  );
};
