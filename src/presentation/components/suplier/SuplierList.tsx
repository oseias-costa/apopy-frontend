import { UpdateSuplier } from "./UpdateSuplier";
import { CreateSuplier } from "./CreateSuplier";
import { DeleteSuplier } from "./DeleteSuplier";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../../redux/slice/suplierSlice";
import getSupliersUseCase from "../../../application/suplier/get-supliers.usecase";
import styled from "styled-components";

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

  const supliersList = data?.map((item) => {
    return (
      <ContainerSuplier key={item._id}>
        <p style={ItemSuplier}>{item.name}</p>
        <button
          onClick={() => {
            setSuplierState({
              id: item._id,
              name: item.name,
              type: "update",
              openModal: true,
            });
          }}
        >
          Editar
        </button>
        <button
          onClick={() => {
            setSuplierState({
              id: item._id,
              name: item.name,
              type: "delete",
              openModal: true,
            });
          }}
        >
          Delete
        </button>
      </ContainerSuplier>
    );
  });

  return (
    <div>
      <h1>Supliers</h1>
      <button
        onClick={() => {
          return setSuplierState({
            id: "",
            name: "",
            type: "create",
            openModal: true,
          });
        }}
      >
        Abrir
      </button>
      <div>{supliersList}</div>
      {typeModal[suplierState.type]}
    </div>
  );
};

const ContainerSuplier = styled("div")`
  display: "flex";

  @media (max-width: 740px) {
    display: block;
    background-color: blue;
  }
`;

const ItemSuplier = {
  color: "red",
  backgroundColor: "black",
};
