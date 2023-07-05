import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCategoriesUseCase } from "../../../application/category/get-categories.usecase"


export const CategoryList = () => {
    const dispatch = useDispatch()
    const categories = getCategoriesUseCase()

    useEffect(() => {
        console.log('renderizou')
        categories.then(res => console.log(res.data.data.categories))
    },[])

    return(
        <div>

        </div>
    )
}