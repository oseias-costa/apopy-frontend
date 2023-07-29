import { ReactElement } from 'react'
import { CategoryList } from '../pages/CategoryPage/components/CategoryList'
import { SuplierList } from '../components/suplier/SuplierList'
import { Login } from '../pages/LoginPage/Login'
import { Register } from '../pages/RegisterPage/Register'
import { Novo } from './Novo'

export type NavigationProps = {
    path: string,
    name: string,
    element: ReactElement,
    isPrivate: boolean
}

export const privateNavigation : NavigationProps[] = [
    { path: '/', name: 'Home', element: <Novo />, isPrivate: true },
    { path: '/categorias', name: 'Categorias', element: <CategoryList />, isPrivate: true },
    { path: '/fornecedores', name: 'Fornecedores', element: <SuplierList />, isPrivate: true },
]

export const openNavigation: NavigationProps[] = [
    { path: '/login', name: 'Login', element: <Login />, isPrivate: false },
    { path: '/registrar', name: 'Registrar', element: <Register />, isPrivate: false },
]