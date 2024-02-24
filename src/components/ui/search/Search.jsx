import { BsSearch } from 'react-icons/bs'
import './search.css'

const Search = () => {
    return (
        <div className='search__container'>
            <input type="text" className='search__input' id='search' name='search' placeholder='Search any product' />
            <span className='search__span'>
                <BsSearch className='search__icon' />
            </span>
        </div>
    )
}

export default Search