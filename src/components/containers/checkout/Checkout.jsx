import { BsWhatsapp } from "react-icons/bs"
import Card from "../../ui/card/Card"

import './checkout.css'

const PAYMETHODS = ["cash", "transfer", "other"]
const DELIVERYMETHODS = [
    {
        location: "Carlos Thays 2099 - Godoy Cruz, Mendoza",
        method: "Local"
    },
    {
        location: "Only Mendoza",
        method: "Delivery"
    },
    {
        location: "Only Argentina",
        method: "Other Countrys"
    }
]

const productoExample = { name: "Mix de frutos secos", price: "#######", description: "Descripción del producto,Descripción del producto,Descripción del producto,Descripción del productoDescripción del producto,Descripción del producto,Descripción del producto,Descripción del producto" }

const Checkout = () => {
    return (
        <main className="checkout__container">
            <section className="checkout__orders">
                <p className="checkout_title">your order:</p>
                <div className="checkout__products">
                    <Card data={productoExample} isAdmin={false} />
                </div>
                <p className="checkout__price">Total $#####</p>
            </section>

            <section className="checkout__options">
                <div className="chekout__methods">

                    <section className="methods">
                        <p className="methods__title">Payment method:</p>
                        {PAYMETHODS.map((text, i) => (
                            <div key={i} className="methods__cards">
                                <input className="methods__input" type="radio" name="payMethod" id={text} />
                                <p className="methods__text">{text}</p>
                            </div>
                        ))}
                    </section>

                    <section className="methods">
                        <p className="methods__title">Shipping method:</p>
                        {DELIVERYMETHODS.map((obj, i) => (
                            <div key={i} className="methods__cards">
                                <input className="methods__input" type="radio" name="deliveryMethod" id={obj.method} />
                                <p className="methods__text">{obj.method}</p>
                            </div>
                        ))}
                    </section>
                </div>
                <p className="chekout__info">
                    You will receive the necessary information to
                    complete the purchase through WhatsApp!
                </p>
                <div className="chekout__buttons">
                    <button className="btn__disable" disabled>
                        Checkout
                        <BsWhatsapp />
                    </button>
                    <button className="btn__primary">
                        <a href="/shop">
                            Go to Shop
                        </a>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Checkout