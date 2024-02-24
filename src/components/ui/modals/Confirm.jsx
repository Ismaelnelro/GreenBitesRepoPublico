import PropTypes from 'prop-types';
import './confirm.css'

const Confirm = ({ onDelete, closeModals, confirm }) => {

    const deleteConfirmed = () => {
        onDelete(confirm?.id)
    }

    return (
        <div className={`confirm__modal`}>
            <p className='confirm__close' onClick={closeModals}>X</p>
            <p className='confirm__text' >Do you wish to remove this product from the store?</p>
            <div className='confirm__buttons'>
                <button className='confirm__button btn__primary' onClick={deleteConfirmed} >Delete</button>
                <button className='confirm__button btn__secondary' onClick={closeModals} >Cancel</button>
            </div>
        </div>
    )
}

export default Confirm;



Confirm.propTypes = {
    onDelete: PropTypes.func.isRequired,
    closeModals: PropTypes.func.isRequired,
    confirm: PropTypes.shape({
        id: PropTypes.string.isRequired,
        confirm: PropTypes.bool
    }).isRequired
}
