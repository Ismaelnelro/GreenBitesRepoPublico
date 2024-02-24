
import image from '../../../assets/img/aboutUs.png'
import './aboutus.css'


const AboutUs = () => {
    return (
        <main className="about__container">
            {/* <section className="about__section">
                <img className="about__image" src={image} alt="" width={1000} height={160} />
            </section> */}

            <section className="about__section">
                <p className="about__title">Who are we?</p>
                <p className="about__subtitle">
                    We are a venture dedicated to the production and marketing of healthy artisanal
                    food products, offering items that are practical, portable, and made with 100% natural
                    ingredients, without added additives.
                </p>
            </section>
        </main>
    )
}

export default AboutUs