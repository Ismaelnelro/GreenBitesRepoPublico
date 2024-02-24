import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import './footer.css';

const Footer = () => {
  return (
    <footer id='Contact' className="container__footer">

      <p className='footer__title'>contact us</p>
      <div className='footer_network'>
        <a href="#Facebook" title='Come to visit us on Facebook'>
          <BsFacebook />
        </a>
        <a href="#Whatsapp" title='Contact us with this number'>
          <BsWhatsapp />
        </a>
        <a href="#Instagram" title='Come to visit us on Instagram'>
          <BsInstagram />
        </a>
      </div>
      <span className='footer__line' ></span>
      <div className='footer__policy'>
        <p className='policy__items'>Privacy & cookies</p>
        <p className='policy__items'>Terms & Conditions</p>
        <p className='policy__items'>Accessibility</p>
      </div>
    </footer>
  )
}

export default Footer