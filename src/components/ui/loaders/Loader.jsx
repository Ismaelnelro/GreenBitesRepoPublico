import { useEffect, useState } from 'react';
import logo from '../../../assets/logo2.png';


import './loader.css'

const Loader = () => {


    const [circleColors, setCircleColors] = useState(['pink', 'green', 'green']);

    useEffect(() => {
        const interval = setInterval(() => {
            setCircleColors(prevColors => [
                prevColors[2], // El segundo círculo se convierte en el primero
                prevColors[0], // El tercer círculo se convierte en el segundo
                prevColors[1]  // El primer círculo se convierte en el tercero
            ]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <main className='loader__container'>
            <img className='loader__image' src={logo} alt="logo image" width={100} height={100} />
            <div className='loader__circles'>
                <span className="loader__circle" style={{ backgroundColor: circleColors[0] }}></span>
                <span className="loader__circle" style={{ backgroundColor: circleColors[1] }}></span>
                <span className="loader__circle" style={{ backgroundColor: circleColors[2] }}></span>
            </div>
            <p className='loader__message'>We are processing your request. If you want, have some nuts</p>
        </main>


    )
}

export default Loader