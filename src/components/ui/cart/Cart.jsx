import { BsBag } from 'react-icons/bs'

import './cart.css'

const Cart = () => {
    //NOTA! CREAR LOGICA DE CART
    return (
        <div className='cart__container'>
            <a href="/checkout">
                <BsBag className='cart__bag-icon' />
            </a>
        </div>
    )
}

export default Cart