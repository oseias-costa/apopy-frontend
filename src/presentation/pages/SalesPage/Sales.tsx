import { useState } from "react"
import { useGetSales } from "../../hooks/useGetSales"
import { SalesContainerPage } from "../../styles/PageStyles/SaleStyles/sales.style"
import { initialSaleState, SaleState } from "../../types/pages/sale.types"
import { SalesRow } from "./components/SalesRow"

export const Sales = () => {
    const { sales } = useGetSales()
    const [ saleState, setSaleState ] = useState<SaleState>(initialSaleState)

    return (
        <SalesContainerPage>
            <SalesRow sales={sales} setSaleState={setSaleState} />
        </SalesContainerPage>
    )
}