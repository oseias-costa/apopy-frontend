import { UpdateSuplier } from "./components/UpdateSuplier";
import { CreateSuplier } from "./components/CreateSuplier";
import { DeleteSuplier } from "./components/DeleteSuplier";
import { useState } from "react";
import * as S from "../../styles/PageStyles/SuplierStyles/suplier-list.style";
import { ButtonCreateItem, TitleSection, TitleWithButton } from "../../styles/GlobalStyles/titleWithButton.style";
import { SuplierRow } from "./components/SuplierRow";
import { useGetSuplier } from "../../hooks/useGetSupliers";
import { suplierInitialState, SuplierState } from "../../types/pages/suplier.types";
import { LoadingComponent } from "../Layout/components/Loading/LoadingComponent";

interface typeModal {
  [key: string]: React.ReactNode;
}

export const Suplier = () => {
  const { loading, supliers } = useGetSuplier();
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
      { loading ? (
         <LoadingComponent />
      ):(
        <SuplierRow data={supliers} setSuplierState={setSuplierState} />
      )}
        {typeModal[suplierState.type]}
    </S.SuplierListContainer>
  );
};
