import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoBagAddOutline, IoPencilOutline, IoTrash } from "react-icons/io5";

import productExample from '../../../assets/productExample.svg'

import './card.css'

const Card = ({ data, isAdminConnected, toggleModals, setConfrim }) => {

  const { name, description, price, id } = data;

  const [inputValue, setinputValue] = useState(0)


  function onIncrement() {
    if (inputValue <= 99) {
      setinputValue(inputValue + 1)
    }
  }



  return (
    <article className="cards__container">
      <picture>
        <img className="cards__image" src={productExample} alt="product name" />
      </picture>

      <section className='cards__section'>
        <div className='cards__body'>
          <p className="cards__title">{name}<b>${price}</b></p>
          <div className='cards__quantity'>
            <button className='quantity__button increment' onClick={onIncrement}>+</button>
            <input className='quantity__input' type="number" name='quantity' disabled value={inputValue} />
            <button className='quantity__button decrement'>-</button>
          </div>
        </div>
        <p className='cards__description'>{description}</p>
      </section>

      <section className='cards__section action'>
        {isAdminConnected ?
          <AdminButtons
            productID={id}
            toggleModals={toggleModals}
            setConfrim={setConfrim}
          /> :
          <button className="btn__primary">
            <IoBagAddOutline className='cards__icon' />
            Add
          </button>
        }
      </section>

    </article>
  )
}

export default Card



const AdminButtons = ({ productID, toggleModals, setConfrim }) => {

  return (
    <div className='cards__section'>
      <button className="btn__primary" onClick={() => toggleModals({ type: "edit", id: productID })}>
        <IoPencilOutline className='cards__icon' />
        Edit
      </button>
      <button type='button' className="btn__secondary" onClick={() => setConfrim({ id: productID, confirm: true })} >
        <IoTrash className='cards__icon' />
        Delete
      </button>
    </div>
  )
}


Card.propTypes = {
  toggleModals: PropTypes.func.isRequired,
  setConfrim: PropTypes.func.isRequired,
  data: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    },
  ).isRequired,
  isAdminConnected: PropTypes.bool
}


AdminButtons.propTypes = {
  productID: PropTypes.string.isRequired,
  toggleModals: PropTypes.func.isRequired,
  setConfrim: PropTypes.func.isRequired
}

