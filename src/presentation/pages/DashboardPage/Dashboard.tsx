import { useDispatch, useSelector } from "react-redux";
import { getDashboardUseCase } from "../../../application/dashboard.usecase";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { fetchDashboardData } from "../../redux/slice/dashboardSlice";
import * as S from "../../styles/PageStyles/DashboardStyles/dashboard.styles";
import { datachart } from "./components/data-example";
import { MyResponsiveBar } from "./components/ChartSales";
import { DollarIcon } from "./components/DollarIcon";
import { ProductsIcon } from "./components/ProductsIcon";
import { BoxesIcon } from "./components/BoxesIcon";
import { Sale } from "../../../domain/entities/sale";
import { formatDate } from "../SalesPage/components/utils-sales";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardData = useSelector((state: RootState) => state.dashboard);
  const sales = useSelector((state: RootState) => state.sale.sales);

  function salesMonthChartData(sales: Sale[], month: number) {
    const dataSales = [];

    for (let i = 0; i < sales.length; i++) {
      const verifyDate = new Date(sales[i].date).getMonth();
      const dateForChart = formatDate(sales[i].date);

      dataSales.push({ date: dateForChart, sales: Number(sales[i].total) });
    }
    return dataSales;
  }

  const data = salesMonthChartData(sales, 7);

  useEffect(() => {
    getDashboardUseCase().then((res) =>
      dispatch(fetchDashboardData(res.data.data.dashboard))
    );
  }, []);

  return (
    <>
      <S.DashboardContainer>
        <S.DashboarItem>
          <S.DashboardNumberBlock>
            <S.DashboardSubTitle>Estoque</S.DashboardSubTitle>
            <S.DashboardNumber>R$ {dashboardData.totalValue}</S.DashboardNumber>
            <S.DashboardItemText>Total em Estoque</S.DashboardItemText>
          </S.DashboardNumberBlock>
          <DollarIcon />
        </S.DashboarItem>
        <S.DashboarItem>
          <S.DashboardNumberBlock>
            <S.DashboardSubTitle>Produtos</S.DashboardSubTitle>
            <S.DashboardNumber>R$ {dashboardData.products}</S.DashboardNumber>
            <S.DashboardItemText>Total de Produtos</S.DashboardItemText>
          </S.DashboardNumberBlock>
          <ProductsIcon />
        </S.DashboarItem>
        <S.DashboarItem>
          <S.DashboardNumberBlock>
            <S.DashboardSubTitle>Quantidade</S.DashboardSubTitle>
            <S.DashboardNumber>{dashboardData.totalItems}</S.DashboardNumber>
            <S.DashboardItemText>Itens no Estoque</S.DashboardItemText>
          </S.DashboardNumberBlock>
          <BoxesIcon />
        </S.DashboarItem>
      </S.DashboardContainer>
      <S.ChartContainer>
        <S.ChartResponsive>
          <MyResponsiveBar data={data} />
        </S.ChartResponsive>
      </S.ChartContainer>
    </>
  );
};
