
import bussine1 from '../../../assets/img/Bussine1.svg';
import bussine2 from '../../../assets/img/Bussine2.svg';
import bussine3 from '../../../assets/img/Bussine3.svg';
import heart from '../../../assets/img/imageHeart.png';

import './business.css';

const Business = () => {
  return (
    <main className='business__container' >

      <p className='business__title'>How to buy?</p>
      <section className='business__steps'>
        <img className='business__stepsItems' src={bussine1} alt="" />
        <img className='business__stepsItems' src={bussine2} alt="" />
        <img className='business__stepsItems' src={bussine3} alt="" />
      </section>
      
      <section id='Resell'  className='business__resell'>
        <p className='business__title'>Resell with us!</p>
        <p className='business__subtitle'>You can order your order in bulk and resell our product.</p>
        <img className='business__image' src={heart} alt="heart image" height={250} width={350} />
        <button className='btn__secondary'><a href="">More info</a></button>
      </section>

    </main>
  )
}

export default Business