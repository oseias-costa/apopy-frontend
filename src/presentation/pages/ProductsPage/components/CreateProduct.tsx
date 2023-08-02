import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Modal } from "../../../components/global/Modal"
import { ProductCreate } from "../../../types/pages/products.types"

export const CreateProduct = ({state, setState}) => {
    const [ product, setProduct ] = useState<ProductCreate>({
        name: '', category: '', subcategory: '', suplier: '', _id: '' })

    let teste     
        // useEffect(() => {
        //     const stateProduct = useSelector(state =>  state)
        //     teste = stateProduct
        // }, [])

        console.log(teste)

    return(
        <>
            <Modal state={state} setState={setState}>
                <h1>Criar Produto</h1>
                <input value={product?.name} onChange={(e) => setProduct({...product, name: e.target.value})} />
            </Modal>
        </>
    )
}