import { salesMonthChartData } from "../components/dashboard-utils";
describe('salesMonthChartData function', () => {
    test('Shold convert to a dataSales', () => {
        const sales = [
            {
                "_id": "64dfa2b906467f8d36417d00",
                "userId": "6451a787de4c08d54ed8da35",
                "stockId": "64d19cef765f56b4c60a7da6",
                "category": "Poltrona",
                "product": "Estrela",
                "subcategory": "Giratória", "suplier": "Taska", "quantity": 2,
                "price": 90,
                "total": 180,
                "costPrice": 42,
                "description": "654444",
                "profit": 48,
                "percentage": 0.5333333333333333,
                "date": "Fri Aug 18 2023 13:56:24 GMT-0300 (Horário Padrão de Brasília)"
            }
        ];
        expect(salesMonthChartData(sales, 7)).toStrictEqual([{ date: '18/08/23', sales: 180 }]);
    });
});
