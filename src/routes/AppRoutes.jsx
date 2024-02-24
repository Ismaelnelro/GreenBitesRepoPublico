import { AboutUsPage, CheckOutPage, HomePage, LoginPage, ShopPage } from '../pages'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/aboutUs' element={<AboutUsPage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/checkout' element={<CheckOutPage />} />
            <Route path='/auth/login' element={<LoginPage />} />
        </Routes>
    )
}

export default AppRoutes