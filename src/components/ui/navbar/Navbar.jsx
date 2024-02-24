
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

import Menu from '../menu/Menu'
import Search from '../search/Search'
import Cart from '../cart/Cart'

import logo from '../../../assets/logo2.png'

import './navbar.css'


const Navbar = () => {

  const [isActive, setisActive] = useState(false)

  const onToggleMenu = () => {
    setisActive(!isActive)
  }

  return (
    <nav className='nav__container'>
      <RxHamburgerMenu className={`${isActive ? 'nav__icon-active' : ''} nav__icon`} onClick={onToggleMenu} />
      <Menu isActive={isActive} />
      <a href="/" className='nav__logo'>
        <img className='nav__image' src={logo} alt="" />
      </a>
      <Search />
      <Cart />
    </nav>

  )
}

export default Navbar