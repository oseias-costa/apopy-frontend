import { createSelector } from "@reduxjs/toolkit"
import { useCallback, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { Modal } from "../../../components/global/Modal"
import { useAppSelector } from "../../../hooks/hooks"
import { ProductCreate } from "../../../types/pages/products.types"

export const CreateProduct = ({state, setState}) => {
    const [ product, setProduct ] = useState<ProductCreate>({
        name: '', category: '', subcategory: '', suplier: '', _id: '' })
    const [ stateProduct, setStateProduct ] = useState(false)
        const useaa = useRef(stateProduct)

        const { products } = useAppSelector((state) => {
            return state.product
        })

        const produtsTwo = (state) => state.product.products

        const selectArr = createSelector([produtsTwo], (producttwo) => {
            console.log(producttwo)
            return producttwo.product.products
        })
    

    return(
        <>
            <Modal state={state} setState={setState}>
                <h1>Criar Produto</h1>
                <input value={product?.name} onChange={(e) => setProduct({...product, name: e.target.value})} />
            </Modal>
        </>
    )
}