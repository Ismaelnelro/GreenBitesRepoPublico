import imageExample from '../../../assets/productExample.svg'
import PropTypes from 'prop-types';
import edit from '../../../assets/img/admin/EditProduct.svg'

import './modal.css'
import { useEffect } from 'react';
import { useState } from 'react';

/* overflow: hidden; */
//NOTA: Configurar overflow hidden para que al aparecer el modal no se pueda movel el fondo

const Modal = ({ closeModals, type, OnAddNewProduct, OnUpdateProduct, idProductToUpdate }) => {

    const [typeModal, settypeModal] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [gramos, setGramos] = useState("")
    const [description, setDescription] = useState("")


    useEffect(() => {
        settypeModal(type)
    }, [type])

    const onSaveChange = (actionType = "") => {

        if (actionType === "add") {
            OnAddNewProduct({ name, price, gramos, description })
        }
        if (actionType === "edit") {
            OnUpdateProduct({ name, price, gramos, description }, idProductToUpdate)
        }
    }

    return (
        <div className="modal_overly">
            <div className="modal">
                {(typeModal === "add") ?
                    <>
                        < div className='modal__group-add'>
                            <img className='item__image-add' src={edit} alt="" />
                        </div>
                        < p className='modal__title'>Add Product</p>
                    </>
                    :
                    < p className='modal__title'>Edit Product</p>
                }
                <p className='modal__cancel' onClick={() => closeModals()} >x</p>
                <form className="modal__form">
                    <section className='modal__form-container'>
                        <img className="modal__form-image" src={imageExample} alt="" />
                        <div className="modal__form-group">
                            <input className="modal__form-input" type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} id='name' placeholder='Name.' autoComplete='false' />
                            <input className="modal__form-input" type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} id='price' placeholder='$ Price.' />
                            <input className="modal__form-input" type="text" name='gramos' value={gramos} onChange={(e) => setGramos(e.target.value)} id='gramos' placeholder='Gr.' />
                        </div>
                    </section>
                    <textarea
                        className='modal__form-textArea'
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Descripción del producto'></textarea>

                    <button type='button' className="btn__primary" onClick={() => onSaveChange(typeModal)}>Save changes</button>

                    <button type='button' className="btn__secondary" onClick={() => closeModals()} >Cancel</button>
                </form>
            </div>
        </div >
    )
}

export default Modal


Modal.propTypes = {
    OnAddNewProduct: PropTypes.func,
    OnUpdateProduct: PropTypes.func,
    idProductToUpdate: PropTypes.string,
    closeModals: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
}