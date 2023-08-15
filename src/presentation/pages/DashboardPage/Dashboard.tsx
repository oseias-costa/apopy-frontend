import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../presentation/redux/slice/userSlice";
import { getDashboardUseCase } from "../../../application/dashboard.usecase";
import { useEffect } from "react";
import { RootState } from "../../redux/store";
import { fetchDashboardData } from "../../redux/slice/dashboardSlice";
import * as S from "../../styles/PageStyles/DashboardStyles/dashboard.styles";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dashboardData = useSelector((state: RootState) => state.dashboard)

  useEffect(() => {
      getDashboardUseCase().then(res => 
        dispatch(fetchDashboardData(res.data.data.dashboard)))
  },[])

  function handleLogout() {
    localStorage.removeItem("apopyToken");
    dispatch(fetchUser({}));
  }

  return (
    <S.DashboardContainer>
      <S.DashboarNumber>
        <p>Total em Estoque</p>
        <h2>{dashboardData.totalValue}</h2>
      </S.DashboarNumber>
      <S.DashboarNumber>
        <p>Total de Produtos</p>
        <h2>{dashboardData.products}</h2>
      </S.DashboarNumber>
      <S.DashboarNumber>
        <p>Total de itens no Estoque</p>
        <h2>{dashboardData.totalItems}</h2>
      </S.DashboarNumber>

      <button onClick={() => handleLogout()}>Logout</button>
    </S.DashboardContainer>
  );
};
