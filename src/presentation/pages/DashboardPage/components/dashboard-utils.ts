import { Sale } from "../../../../domain/entities/sale";
import { formatDate } from "../../SalesPage/components/utils-sales";

export interface DataSales {
    date: string,
    sales: number
}

export function salesMonthChartData(sales: Sale[], month: number) {
    let dataSales: DataSales[] = [];

    for (let i = 0; i < sales.length; i++) {
      const verifySameMonth = new Date(sales[i].date).getMonth();
      const dateForChart = formatDate(sales[i].date);
      let dateIsInArray = false

      if(month === verifySameMonth){ 
        for(let j = 0; j < dataSales.length; j++){
          if(dataSales[j].date === dateForChart){
            dataSales[j].sales += sales[i].total
            dateIsInArray = true
          }
        }
      }

      if(!dateIsInArray){
        dataSales.push({ date: dateForChart, sales: Number(sales[i].total) });
      }    
    }
    return dataSales;
  }