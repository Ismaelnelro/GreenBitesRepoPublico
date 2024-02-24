import { Link } from 'react-router-dom'

// import ControlRoomImage from '../../../assets/img/admin/ControlRoomImage.svg'
import add from '../../../assets/img/admin/AddProduct.svg'
import edit from '../../../assets/img/admin/EditProduct.svg'
import reselling from '../../../assets/img/admin/ResellinDashboard.svg'

import './controlRoom.css';
import Hero from '../../ui/hero/Hero'

const PATHS = [
    {
        to: "/admin/shop/edit",
        src: add,
        name: "Edit Products"
    },
    {
        to: "/admin/shop/edit",
        src: edit,
        name: "Add Products"
    },
    {
        to: "/admin/docs",
        src: reselling,
        name: "Docs"
    },
    {
        to: "/admin/resseling/dashboard",
        src: reselling,
        name: "Reselling section"
    }
]

/**
 * NOTA no hay retorno a esta seccion hayu que disenarla
 * */

const ControlRoom = () => {

    return (
        <main className='control__container'>
            {/* <div className='control__hero'>
                <img className='control__image' src={ControlRoomImage} alt="three bowls of cereals" />
            </div> */}
            <Hero/>
            <p className='control__title'>Control Room</p>
            <section className='control__section'>
                {PATHS.map((data, i) => (
                    <Link to={data.to} key={i} >
                        <div className='control__items'>
                            <img className='items__image' src={data.src} alt="" />
                            <p className='items__name'>{data.name}</p>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    )
}

export default ControlRoom;