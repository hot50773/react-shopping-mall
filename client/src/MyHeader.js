import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CartIcon } from 'bootstrap-icons/icons/cart-fill.svg'
// 在 React 引入 SVG 圖檔的方法: https://medium.com/itsoktomakemistakes/react-create-react-app-svg-icons-styled-component-570b4e9f07b
// bootstrap icon: https://icons.getbootstrap.com/#usage

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import ShoppingCardPanel from './components/ShoppingCart'

const MyHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setCartOpen] = useState(false)

  const toggle = () => { setIsOpen(!isOpen) }

  const handleCartToggle = () => { setCartOpen(!isCartOpen) }
  // demo: https://github.com/creativetimofficial/material-kit-react/blob/master/src/components/Header/Header.js

  return (
    <>
      <Navbar color='dark' dark fixed='top' expand='md'>
        <NavbarBrand tag='span'>
          <Link to='/'>Life Wear</Link>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink tag='span'>
                <Link to='/list/women'>女裝</Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag='span'>
                <Link to='/list/men'>男裝</Link>
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar>
            <NavItem>
              <NavLink tag='span'>
                <Link to='#'>登入</Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='#' id='btn-open-cart' onClick={handleCartToggle} className='align-middle'>
                <CartIcon
                  style={{
                    width: '1.2rem',
                    height: '1.2rem',
                    marginBottom: '0.25rem'
                  }}
                />
              </NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>

      <ShoppingCardPanel cartData={props.cartData} isOpen={isCartOpen} handleCartToggle={handleCartToggle} />
    </>
  )
}

export default MyHeader
