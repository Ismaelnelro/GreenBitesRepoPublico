
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useHeroLocation = () => {

    const [isHomePage, setisHomePage] = useState(false)
    const [isAboutPage, setisAboutPage] = useState(false)
    const [isRoomControlPage, setisRoomControlPage] = useState(false)

    const location = useLocation();




    useEffect(() => {
        const checkLocation = () => {
            const path = location.pathname.toLowerCase();
            setisHomePage(path === '/');
            setisAboutPage(path === '/aboutus');
            setisRoomControlPage(path === '/admin/dashboard');
        };

        checkLocation();

    }, [location.pathname]);




    return {
        isHomePage,
        isAboutPage,
        isRoomControlPage
    }
}
export default useHeroLocation;