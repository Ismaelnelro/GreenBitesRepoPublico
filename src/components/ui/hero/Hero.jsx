
import useHeroLocation from '../../../Hooks/useHeroLocation'


import hero from '../../../assets/hero.svg'
import image from '../../../assets/img/aboutUs.png'

import './hero.css'

const Hero = () => {

    const { isAboutPage, isHomePage, isRoomControlPage } = useHeroLocation();

    return (
        <div className="hero__container">
            {isHomePage && <img className="hero__image" src={hero} alt="hero image" />}
            {isAboutPage && <img className="hero__image" src={image} alt="hero image" />}
            {isRoomControlPage && <img className="hero__image" src={hero} alt="hero image" />}
        </div>
    )
}

export default Hero