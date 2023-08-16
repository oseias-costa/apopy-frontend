import { UpdateSuplier } from "./UpdateSuplier";
import { CreateSuplier } from "./CreateSuplier";
import { DeleteSuplier } from "./DeleteSuplier";
import { useState } from "react";
import * as S from "../../../styles/PageStyles/SuplierStyles/suplier-list.style";
import {
  ButtonCreateItem,
  TitleSection,
  TitleWithButton,
} from "../../../styles/GlobalStyles/titleWithButton.style";
import { SuplierRow } from "./SuplierRow";
import { useGetSuplier } from "../../../hooks/useGetSupliers";
import { suplierInitialState, SuplierState } from "../../../types/pages/suplier.types";

interface typeModal {
  [key: string]: React.ReactNode;
}

export const SuplierList = () => {
  const { supliers } = useGetSuplier();
  const [suplierState, setSuplierState] = useState<SuplierState>(suplierInitialState);

  const typeModal: typeModal = {
    create: <CreateSuplier state={suplierState} setState={setSuplierState} />,
    update: <UpdateSuplier state={suplierState} setState={setSuplierState} />,
    delete: <DeleteSuplier state={suplierState} setState={setSuplierState} />,
  };

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
      <SuplierRow data={supliers} setSuplierState={setSuplierState} />
      {typeModal[suplierState.type]}
    </S.SuplierListContainer>
  );
};
