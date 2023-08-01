import { UpdateSuplier } from "./UpdateSuplier";
import { CreateSuplier } from "./CreateSuplier";
import { DeleteSuplier } from "./DeleteSuplier";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../../../redux/slice/suplierSlice";
import getSupliersUseCase from "../../../../application/suplier/get-supliers.usecase";
import * as S from "../../../styles/PageStyles/SuplierStyles/suplier-list.style";
import {
  ButtonCreateItem,
  TitleSection,
  TitleWithButton,
} from "../../../styles/GlobalStyles/titleWithButton.style";
import { SuplierRow } from "./SuplierRow";

export interface ItemProps {
  id: string;
  name: string;
  type: string;
  openModal: boolean;
}

interface typeModal {
  [key: string]: React.ReactNode;
}

export const SuplierList = () => {
  const [suplierState, setSuplierState] = useState<
    React.SetStateAction<ItemProps>
  >({
    id: "",
    name: "",
    type: "",
    openModal: false,
  });

  const typeModal: typeModal = {
    create: <CreateSuplier state={suplierState} setState={setSuplierState} />,
    update: <UpdateSuplier state={suplierState} setState={setSuplierState} />,
    delete: <DeleteSuplier state={suplierState} setState={setSuplierState} />,
  };

  const data = useSelector((state) => state.suplier.supliers);
  const dispatch = useDispatch();

  useEffect(() => {
    getSupliersUseCase().then((res) =>
      dispatch(fetchData(res.data.data.supliers))
    );
  }, []);

  return (
    <S.SuplierListContainer>
      <TitleWithButton>
        <TitleSection>Fornecedores</TitleSection>
        <ButtonCreateItem
          onClick={() => {
            return setSuplierState({
              id: "",
              name: "",
              type: "create",
              openModal: true,
            });
          }}
        >
          Adicionar
        </ButtonCreateItem>
      </TitleWithButton>
      <SuplierRow data={data} setSuplierState={setSuplierState} />
      {typeModal[suplierState.type]}
    </S.SuplierListContainer>
  );
};
