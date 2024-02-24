import { Navigate, Route, Routes } from 'react-router-dom'
import { ControlRoomPage, EditProductsPage } from '../pages/admin'
import useCheckAdmin from '../Hooks/useCheckAdmin'


const AdminRoutes = () => {

    const { admin } = useCheckAdmin();

    return (
        <Routes>
            {admin && admin.isConnected ?
                <>
                    <Route path='/dashboard' element={<ControlRoomPage />} />
                    <Route path='/shop/edit' element={<EditProductsPage />} />
                </>
                :
                <Route path='/admin/*' element={<Navigate to="/auth/login" />} />
            }
        </Routes>
    )
}

export default AdminRoutes