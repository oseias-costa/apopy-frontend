import { useEffect } from "react"
import { getProductsUseCase } from "../../../application/product.usecase"
import { fetchProducts } from "../../redux/slice/productSlice"
import * as S from "../../styles/GlobalStyles/titleWithButton.style"
import { ProductContainer } from "../../styles/PageStyles/ProductStyles/products.style"

export const Product = () => {
    const products = getProductsUseCase()

    useEffect(() => {
        products.then(res => console.log(res))
    })

    return(



        <ProductContainer>
            <S.TitleWithButton>
                <S.TitleSection>Product</S.TitleSection>
                <S.ButtonCreateItem>Adicionar</S.ButtonCreateItem>
            </S.TitleWithButton>
        </ProductContainer>
    )
}