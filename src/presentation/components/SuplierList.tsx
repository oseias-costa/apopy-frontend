import { SuplierListFactory } from '../../infra/factory/suplier-list'

export const SuplierList = () => {
  const supliers = async () => {
    const data = await SuplierListFactory.get()
    const res = await data.json()

   return res }

   console.log(supliers())
  
  return (
  <div>
      <h1>Supliers</h1>
    </div>
  );
};
