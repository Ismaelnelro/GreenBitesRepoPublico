import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useCheckAdmin = () => {

    const navigate = useNavigate();

    const url = "http://localhost:3001/auth";

    let initialState = JSON.parse(localStorage.getItem("admin")) || null;


    const [admin, setAdmin] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("admin"));
        setAdmin(data)
    }, [])


 

    async function checkCredentials({ email, password }) {
        setLoading(true);
        try {

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok!")
            }
            const loginResponseData = await response.json();

            if (loginResponseData.password !== password || loginResponseData.email !== email) {
                throw new Error("Invalid Credentials")
            }

            localStorage.setItem("admin", JSON.stringify({ ...loginResponseData, isConnected: true }))
            await updateAdminOnServer({ ...loginResponseData, isConnected: true })

            setTimeout(() => {
                setLoading(false)
                navigate('/admin/dashboard');
            }, 4000);

        } catch (error) {
            setError(error.message)
            setLoading(false)
        }

    }


    const updateAdminOnServer = async (userData) => {

        try {
            await fetch(url, {
                method: "PUT",
                headers: { 'Content-type': 'Application/json' },
                body: JSON.stringify(userData)
            });


        } catch (error) {
            console.error("Error updating user on server:", error);
        }
    };


    const logOut = async () => {
        localStorage.removeItem("admin")
        await updateAdminOnServer({ ...admin, isConnected: false })
        navigate('/')
    }

    return { checkCredentials, logOut, admin, loading, error }
}

export default useCheckAdmin